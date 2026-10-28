// ==========================================================================
// THE WORLD'S WORST FLORIST - Node.js + Built-in SQLite Server
// Run locally or on JetHost Node.js App with: npm start
// Uses Node 22+ built-in `node:sqlite` (with automatic fallback if older Node)
// ==========================================================================

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8000;
const DB_PATH = path.join(__dirname, 'api', 'leaderboard.sqlite');

const SEED_DATA = [
  {
    nametag: 'PetuniaTheMenace',
    score: 99,
    avgScore: 91,
    served: 24,
    rating: 114,
    signatureBouquet: 'Velvet Rose, Gas-Powered Chainsaw & Stolen Traffic Cone',
    badge: '🏆 Grandmaster of Questionable Arrangements'
  },
  {
    nametag: 'ForkliftBotanist',
    score: 96,
    avgScore: 88,
    served: 19,
    rating: 109,
    signatureBouquet: 'Giant Sunflower, 16-lb Bowling Ball & Hi-Vis Safety Vest',
    badge: '🦺 OSHA-Certified Florist'
  },
  {
    nametag: 'GnomeWhisperer84',
    score: 94,
    avgScore: 85,
    served: 15,
    rating: 106,
    signatureBouquet: 'Mystic Orchid, Judgmental Garden Gnome & Groovy Lava Lamp',
    badge: '🧙 Ceramic Intimidation Specialist'
  },
  {
    nametag: 'ChainsawRomeo',
    score: 91,
    avgScore: 82,
    served: 14,
    rating: 102,
    signatureBouquet: 'Blushing Lush Peony, Smooth Jazz Saxophone & CO2 Fire Extinguisher',
    badge: '🎷 Smooth-Jazz Hazard'
  },
  {
    nametag: 'AuntMildredsWrath',
    score: 88,
    avgScore: 79,
    served: 12,
    rating: 98,
    signatureBouquet: 'Solemn Stargazer Lily, 12-lb Aged Cheddar Wheel & Ceremonial Plunger',
    badge: '🧀 Dairy & Plunger Visionary'
  },
  {
    nametag: 'DandelionPirate',
    score: 84,
    avgScore: 76,
    served: 10,
    rating: 94,
    signatureBouquet: 'Sidewalk Dandelion Weed, Squeaky Rubber Duck & Foam Pool Noodle',
    badge: '🦆 Aquatic Whimsy Artisan'
  },
  {
    nametag: 'TinfoilTulip',
    score: 79,
    avgScore: 72,
    served: 8,
    rating: 88,
    signatureBouquet: 'Spring Tulip, Deluxe Tinfoil Hat & Haunted Crystal Ball',
    badge: '👽 Paranormal Stem Arranger'
  }
];

let db = null;
try {
  const sqlite = await import('node:sqlite');
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  db = new sqlite.DatabaseSync(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS leaderboard (
      nametag TEXT PRIMARY KEY COLLATE NOCASE,
      score INTEGER NOT NULL DEFAULT 0,
      avgScore INTEGER NOT NULL DEFAULT 0,
      served INTEGER NOT NULL DEFAULT 1,
      rating INTEGER NOT NULL DEFAULT 0,
      signatureBouquet TEXT NOT NULL DEFAULT '',
      badge TEXT NOT NULL DEFAULT '',
      updatedAt INTEGER NOT NULL DEFAULT 0
    )
  `);
  const countRow = db.prepare('SELECT COUNT(*) AS cnt FROM leaderboard').get();
  if (!countRow || countRow.cnt === 0) {
    const insert = db.prepare(`
      INSERT INTO leaderboard (nametag, score, avgScore, served, rating, signatureBouquet, badge, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const now = Math.floor(Date.now() / 1000);
    for (const s of SEED_DATA) {
      insert.run(s.nametag, s.score, s.avgScore, s.served, s.rating, s.signatureBouquet, s.badge, now);
    }
  }
} catch (err) {
  console.warn('node:sqlite not available, using JSON fallback:', err.message);
}

const ORDER_BY = 'score DESC, avgScore DESC, served DESC, rating DESC';

function queryAllSorted() {
  const rows = db.prepare(`SELECT * FROM leaderboard ORDER BY ${ORDER_BY}`).all();
  return rows.map((r, idx) => ({ ...r, rank: idx + 1 }));
}

function upsertScore(body) {
  const nametag = String(body.nametag || '').trim().slice(0, 22);
  if (!nametag) throw new Error('Missing florist nametag');

  const score = Math.max(0, Math.min(100, Number(body.score) || 0));
  const avgScore = Math.max(0, Math.min(100, Number(body.avgScore) || score));
  const served = Math.max(1, Number(body.served) || 1);
  const sig = String(body.signatureBouquet || 'Bespoke Mystery Arrangement').trim().slice(0, 90);
  const badge = String(body.badge || '🌺 Certified Florist').trim().slice(0, 60);

  const existing = db.prepare('SELECT * FROM leaderboard WHERE nametag = ? COLLATE NOCASE').get(nametag);
  let bestScore = score;
  let bestSig = sig;
  let bestBadge = badge;
  let totalServed = served;

  if (existing) {
    bestScore = Math.max(existing.score, score);
    bestSig = score >= existing.score ? sig : existing.signatureBouquet;
    bestBadge = score >= existing.score ? badge : existing.badge;
    totalServed = Math.max(existing.served, served);
  }

  const volBonus = Math.min(25, Math.round(Math.log2(totalServed + 1) * 4.5));
  const rating = Math.round(avgScore * 0.7 + bestScore * 0.3 + volBonus);

  db.prepare(`
    INSERT INTO leaderboard (nametag, score, avgScore, served, rating, signatureBouquet, badge, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(nametag) DO UPDATE SET
      nametag = excluded.nametag,
      score = excluded.score,
      avgScore = excluded.avgScore,
      served = excluded.served,
      rating = excluded.rating,
      signatureBouquet = excluded.signatureBouquet,
      badge = excluded.badge,
      updatedAt = excluded.updatedAt
  `).run(nametag, bestScore, avgScore, totalServed, rating, bestSig, bestBadge, Math.floor(Date.now() / 1000));

  return queryAllSorted().slice(0, 50);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (urlObj.pathname === '/api/leaderboard' || urlObj.pathname === '/api/leaderboard.php') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      return res.end();
    }

    if (req.method === 'GET') {
      const search = (urlObj.searchParams.get('search') || '').trim().toLowerCase();
      const all = queryAllSorted();
      if (search) {
        const matches = all.filter(r => r.nametag.toLowerCase().includes(search)).slice(0, 10);
        res.writeHead(200);
        return res.end(JSON.stringify({ matches }));
      }
      res.writeHead(200);
      return res.end(JSON.stringify({ leaderboard: all.slice(0, 50) }));
    }

    if (req.method === 'POST') {
      let raw = '';
      req.on('data', chunk => { raw += chunk; });
      req.on('end', () => {
        try {
          const body = JSON.parse(raw || '{}');
          const leaderboard = upsertScore(body);
          res.writeHead(200);
          res.end(JSON.stringify({ leaderboard }));
        } catch (err) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }
  }

  // Serve static files
  let safePath = path.normalize(decodeURIComponent(urlObj.pathname)).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') safePath = '/index.html';
  const filePath = path.join(__dirname, safePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`🌺 The World's Worst Florist (Node + SQLite Leaderboard) running at http://localhost:${PORT}`);
});
