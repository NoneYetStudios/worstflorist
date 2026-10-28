#!/usr/bin/env python3
"""
THE WORLD'S WORST FLORIST - Local & WSGI SQLite Server
Run locally with: python server.py
"""

import json
import math
import os
import sqlite3
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

PORT = int(os.environ.get("PORT", 8000))
DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "api", "leaderboard.sqlite")


def get_db():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("""
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
    """)
    cur = conn.execute("SELECT COUNT(*) FROM leaderboard")
    if cur.fetchone()[0] == 0:
        now = int(time.time())
        seeds = [
            ("PetuniaTheMenace", 99, 91, 24, 114, "Velvet Rose, Gas-Powered Chainsaw & Stolen Traffic Cone", "🏆 Grandmaster of Questionable Arrangements", now),
            ("ForkliftBotanist", 96, 88, 19, 109, "Giant Sunflower, 16-lb Bowling Ball & Hi-Vis Safety Vest", "🦺 OSHA-Certified Florist", now),
            ("GnomeWhisperer84", 94, 85, 15, 106, "Mystic Orchid, Judgmental Garden Gnome & Groovy Lava Lamp", "🧙 Ceramic Intimidation Specialist", now),
            ("ChainsawRomeo", 91, 82, 14, 102, "Blushing Lush Peony, Smooth Jazz Saxophone & CO2 Fire Extinguisher", "🎷 Smooth-Jazz Hazard", now),
            ("AuntMildredsWrath", 88, 79, 12, 98, "Solemn Stargazer Lily, 12-lb Aged Cheddar Wheel & Ceremonial Plunger", "🧀 Dairy & Plunger Visionary", now),
            ("DandelionPirate", 84, 76, 10, 94, "Sidewalk Dandelion Weed, Squeaky Rubber Duck & Foam Pool Noodle", "🦆 Aquatic Whimsy Artisan", now),
            ("TinfoilTulip", 79, 72, 8, 88, "Spring Tulip, Deluxe Tinfoil Hat & Haunted Crystal Ball", "👽 Paranormal Stem Arranger", now),
        ]
        conn.executemany(
            "INSERT INTO leaderboard (nametag, score, avgScore, served, rating, signatureBouquet, badge, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            seeds
        )
        conn.commit()
    return conn


ORDER_BY = "score DESC, avgScore DESC, served DESC, rating DESC"


class FloristRequestHandler(SimpleHTTPRequestHandler):
    def send_json(self, payload, status=200):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path in ("/api/leaderboard", "/api/leaderboard.php"):
            qs = parse_qs(parsed.query)
            search = (qs.get("search", [""])[0] or "").strip()
            conn = get_db()
            try:
                rows = [dict(r) for r in conn.execute(f"SELECT * FROM leaderboard ORDER BY {ORDER_BY}").fetchall()]
                for idx, r in enumerate(rows):
                    r["rank"] = idx + 1
                if search:
                    matches = [r for r in rows if search.lower() in r["nametag"].lower()][:10]
                    return self.send_json({"matches": matches})
                return self.send_json({"leaderboard": rows[:50]})
            finally:
                conn.close()
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path in ("/api/leaderboard", "/api/leaderboard.php"):
            length = int(self.headers.get("Content-Length", 0))
            raw = self.rfile.read(length).decode("utf-8") if length > 0 else "{}"
            try:
                body = json.loads(raw)
            except Exception:
                return self.send_json({"error": "Invalid JSON"}, 400)

            nametag = str(body.get("nametag", "")).strip()[:22]
            if not nametag:
                return self.send_json({"error": "Missing florist nametag"}, 400)

            score = max(0, min(100, int(body.get("score", 0))))
            avg_score = max(0, min(100, int(body.get("avgScore", score))))
            served = max(1, int(body.get("served", 1)))
            sig = str(body.get("signatureBouquet", "Bespoke Mystery Arrangement")).strip()[:90]
            badge = str(body.get("badge", "🌺 Certified Florist")).strip()[:60]

            conn = get_db()
            try:
                existing = conn.execute(
                    "SELECT * FROM leaderboard WHERE nametag = ? COLLATE NOCASE", (nametag,)
                ).fetchone()
                if existing:
                    best_score = max(int(existing["score"]), score)
                    best_sig = sig if score >= int(existing["score"]) else existing["signatureBouquet"]
                    best_badge = badge if score >= int(existing["score"]) else existing["badge"]
                    total_served = max(int(existing["served"]), served)
                else:
                    best_score = score
                    best_sig = sig
                    best_badge = badge
                    total_served = served

                vol_bonus = min(25, round(math.log2(total_served + 1) * 4.5))
                rating = round(avg_score * 0.7 + best_score * 0.3 + vol_bonus)

                conn.execute("""
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
                """, (nametag, best_score, avg_score, total_served, rating, best_sig, best_badge, int(time.time())))
                conn.commit()

                rows = [dict(r) for r in conn.execute(f"SELECT * FROM leaderboard ORDER BY {ORDER_BY} LIMIT 50").fetchall()]
                for idx, r in enumerate(rows):
                    r["rank"] = idx + 1
                return self.send_json({"leaderboard": rows})
            finally:
                conn.close()
        self.send_error(404)


if __name__ == "__main__":
    get_db().close()
    print(f"🌺 The World's Worst Florist (SQLite Leaderboard Active) running at http://localhost:{PORT}")
    server = ThreadingHTTPServer(("0.0.0.0", PORT), FloristRequestHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down flower shop server...")
        server.server_close()
