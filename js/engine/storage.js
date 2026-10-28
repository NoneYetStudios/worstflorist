// ==========================================================================
// THE WORLD'S WORST FLORIST - LocalStorage Progression, SQLite Global
// Leaderboard API Client (with Friend Lookup & Local Fallback), & Confetti
// ==========================================================================

const STORAGE_KEY = 'worst_florist_save_v2';
const LEADERBOARD_KEY = 'worst_florist_global_board_v1';
const API_URL = 'api/leaderboard.php';

// Seeded Global Florist Champions (used as fallback if offline)
const SEEDED_GLOBAL_BOARD = [
  {
    nametag: 'PetuniaTheMenace',
    score: 99,
    avgScore: 91,
    served: 24,
    signatureBouquet: 'Velvet Rose, Gas-Powered Chainsaw & Stolen Traffic Cone',
    badge: '🏆 Grandmaster of Questionable Arrangements',
    isPlayer: false
  },
  {
    nametag: 'ForkliftBotanist',
    score: 96,
    avgScore: 88,
    served: 19,
    signatureBouquet: 'Giant Sunflower, 16-lb Bowling Ball & Hi-Vis Safety Vest',
    badge: '🦺 OSHA-Certified Florist',
    isPlayer: false
  },
  {
    nametag: 'GnomeWhisperer84',
    score: 94,
    avgScore: 85,
    served: 15,
    signatureBouquet: 'Mystic Orchid, Judgmental Garden Gnome & Groovy Lava Lamp',
    badge: '🧙 Ceramic Intimidation Specialist',
    isPlayer: false
  },
  {
    nametag: 'ChainsawRomeo',
    score: 91,
    avgScore: 82,
    served: 14,
    signatureBouquet: 'Blushing Lush Peony, Smooth Jazz Saxophone & CO2 Fire Extinguisher',
    badge: '🎷 Smooth-Jazz Hazard',
    isPlayer: false
  },
  {
    nametag: 'AuntMildredsWrath',
    score: 88,
    avgScore: 79,
    served: 12,
    signatureBouquet: 'Solemn Stargazer Lily, 12-lb Aged Cheddar Wheel & Ceremonial Plunger',
    badge: '🧀 Dairy & Plunger Visionary',
    isPlayer: false
  },
  {
    nametag: 'DandelionPirate',
    score: 84,
    avgScore: 76,
    served: 10,
    signatureBouquet: 'Sidewalk Dandelion Weed, Squeaky Rubber Duck & Foam Pool Noodle',
    badge: '🦆 Aquatic Whimsy Artisan',
    isPlayer: false
  },
  {
    nametag: 'TinfoilTulip',
    score: 79,
    avgScore: 72,
    served: 8,
    signatureBouquet: 'Spring Tulip, Deluxe Tinfoil Hat & Haunted Crystal Ball',
    badge: '👽 Paranormal Stem Arranger',
    isPlayer: false
  }
];

const DEFAULT_STATS = {
  floristNametag: 'Apprentice Florist',
  customersServed: 0,
  lifetimeScore: 0,
  bestScore: 0,
  highestAvg: 0,
  perfectCount: 0,
  currentStreak: 0,
  longestStreak: 0,
  bestBouquetItems: [],
  bestBouquetDesc: 'No bouquets recorded yet. Get out there and tape a toaster to a tulip!'
};

export function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATS };
    return { ...DEFAULT_STATS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_STATS };
  }
}

export function saveStats(stats) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // Ignore storage quota errors
  }
}

export function updateFloristNametag(stats, newNametag) {
  const cleaned = (newNametag || '').trim().slice(0, 22) || 'Mystery Florist';
  const updated = { ...stats, floristNametag: cleaned };
  saveStats(updated);
  if (updated.bestScore > 0) {
    syncPlayerToLeaderboard(updated);
  }
  return updated;
}

export function loadLeaderboard() {
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    if (!raw) {
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(SEEDED_GLOBAL_BOARD));
      return [...SEEDED_GLOBAL_BOARD];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [...SEEDED_GLOBAL_BOARD];
  } catch {
    return [...SEEDED_GLOBAL_BOARD];
  }
}

export function saveLeaderboard(board) {
  try {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board));
  } catch {
    // Ignore storage quota errors
  }
}

export function getBadgeForScore(score) {
  if (score >= 95) return '👑 Supreme Botanical Menace';
  if (score >= 86) return '🌟 Certified Chaos Virtuoso';
  if (score >= 70) return '😎 Master of Questionable Objects';
  if (score >= 50) return '🤔 Surprisingly Competent';
  return '🚒 Public Safety Hazard';
}

export function calculateFloristRating(entry) {
  const best = entry.score || 0;
  const avg = entry.avgScore || best;
  const served = entry.served || 1;
  const volumeBonus = Math.min(25, Math.round(Math.log2(served + 1) * 4.5));
  return Math.round(avg * 0.7 + best * 0.3 + volumeBonus);
}

function sortBoard(board) {
  return [...board].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const avgA = a.avgScore || a.score;
    const avgB = b.avgScore || b.score;
    if (avgB !== avgA) return avgB - avgA;
    const servedA = a.served || 1;
    const servedB = b.served || 1;
    if (servedB !== servedA) return servedB - servedA;
    return calculateFloristRating(b) - calculateFloristRating(a);
  });
}

// Local immediate sync + background POST to SQLite Global Leaderboard
export function syncPlayerToLeaderboard(stats, customScore = null, customSignature = null) {
  const board = loadLeaderboard();
  const nametag = (stats.floristNametag || 'Apprentice Florist').trim();
  const avgScore = stats.customersServed > 0
    ? Math.round(stats.lifetimeScore / stats.customersServed)
    : 0;

  const entryScore = customScore !== null ? Math.max(stats.bestScore, customScore) : stats.bestScore;
  if (entryScore <= 0) {
    return markPlayerRows(sortBoard(board), nametag);
  }

  const signature = customSignature ||
    (stats.bestBouquetItems && stats.bestBouquetItems.length > 0
      ? stats.bestBouquetItems.slice(0, 3).join(', ')
      : 'Bespoke Mystery Arrangement');

  const existingIdx = board.findIndex(
    e => e.isPlayer || e.nametag.toLowerCase() === nametag.toLowerCase()
  );

  const playerEntry = {
    nametag,
    score: entryScore,
    avgScore: avgScore || entryScore,
    served: Math.max(1, stats.customersServed),
    signatureBouquet: signature,
    badge: getBadgeForScore(entryScore),
    isPlayer: true
  };

  if (existingIdx !== -1) {
    playerEntry.score = Math.max(board[existingIdx].score, playerEntry.score);
    board[existingIdx] = playerEntry;
  } else {
    board.push(playerEntry);
  }

  const sorted = markPlayerRows(sortBoard(board).slice(0, 50), nametag);
  saveLeaderboard(sorted);

  // Fire-and-forget sync to the SQLite backend
  postScoreToSQLite(playerEntry).catch(() => {});

  return sorted;
}

function markPlayerRows(rows, playerNametag) {
  const tagLower = (playerNametag || '').trim().toLowerCase();
  return rows.map((r, idx) => ({
    ...r,
    rank: r.rank || idx + 1,
    isPlayer: r.nametag.toLowerCase() === tagLower
  }));
}

// Fetch live SQLite Global Leaderboard (falls back to local cache if running with plain http.server)
export async function fetchGlobalLeaderboard(stats) {
  const playerTag = (stats?.floristNametag || 'Apprentice Florist').trim();
  try {
    const res = await fetch(API_URL, { method: 'GET', headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && Array.isArray(data.leaderboard)) {
      const marked = markPlayerRows(data.leaderboard, playerTag);
      saveLeaderboard(marked);
      return { rows: marked, source: 'sqlite' };
    }
  } catch {
    // Fallback to localStorage board
  }
  const localRows = syncPlayerToLeaderboard(stats);
  return { rows: localRows, source: 'local' };
}

export async function postScoreToSQLite(playerEntry) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(playerEntry)
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data && Array.isArray(data.leaderboard)) {
    saveLeaderboard(markPlayerRows(data.leaderboard, playerEntry.nametag));
  }
  return data;
}

// Look up a friend by Florist Nametag against SQLite (with local fallback)
export async function lookupFriendByNametag(query, stats) {
  const cleanQuery = (query || '').trim();
  if (!cleanQuery) {
    throw new Error('Enter a Florist Nametag to look up!');
  }

  try {
    const res = await fetch(`${API_URL}?search=${encodeURIComponent(cleanQuery)}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.matches)) {
        return data.matches;
      }
    }
  } catch {
    // Fallback to local board search if offline
  }

  const localBoard = syncPlayerToLeaderboard(stats);
  return localBoard
    .map((entry, idx) => ({ ...entry, rank: idx + 1 }))
    .filter(entry => entry.nametag.toLowerCase().includes(cleanQuery.toLowerCase()));
}

export function recordRoundResult(stats, score, rankTitle, itemNames, customerName) {
  const updated = { ...stats };
  updated.customersServed += 1;
  updated.lifetimeScore += score;

  const currentAvg = Math.round(updated.lifetimeScore / updated.customersServed);
  if (currentAvg > updated.highestAvg) {
    updated.highestAvg = currentAvg;
  }

  if (score >= 86) {
    updated.perfectCount += 1;
  }

  if (score >= 65) {
    updated.currentStreak += 1;
    if (updated.currentStreak > updated.longestStreak) {
      updated.longestStreak = updated.currentStreak;
    }
  } else {
    updated.currentStreak = 0;
  }

  if (score >= updated.bestScore) {
    updated.bestScore = score;
    updated.bestBouquetItems = itemNames;
    updated.bestBouquetDesc = `${score} PTS (${rankTitle}) for ${customerName}: ${itemNames.join(', ')}`;
  }

  saveStats(updated);
  syncPlayerToLeaderboard(updated);
  return updated;
}

export function resetStats() {
  const fresh = { ...DEFAULT_STATS };
  saveStats(fresh);
  localStorage.removeItem(LEADERBOARD_KEY);
  return fresh;
}

// ---------------------------------------------------------------------------
// Canvas Confetti Celebration Burst
// ---------------------------------------------------------------------------
export function launchConfetti(canvas, particleCount = 85) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#ff5d8f', '#ffd166', '#06d6a0', '#118ab2', '#8338ec', '#ff9f1c'];
  const particles = Array.from({ length: particleCount }, () => ({
    x: canvas.width * 0.5 + (Math.random() - 0.5) * 220,
    y: canvas.height * 0.45,
    vx: (Math.random() - 0.5) * 16,
    vy: -Math.random() * 15 - 5,
    size: 7 + Math.random() * 7,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * Math.PI * 2,
    vRot: (Math.random() - 0.5) * 0.25,
    gravity: 0.36
  }));

  let frame = 0;
  function animate() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let active = 0;
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rot += p.vRot;

      if (p.y < canvas.height + 30) {
        active++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
        ctx.restore();
      }
    }

    if (active > 0 && frame < 190) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(animate);
}
