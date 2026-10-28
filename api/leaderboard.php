<?php
// ==========================================================================
// THE WORLD'S WORST FLORIST - Zero-Config SQLite Global Leaderboard API (PHP)
// Works automatically on JetHost / cPanel static subdomain folders!
// ==========================================================================

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$dbPath = __DIR__ . '/leaderboard.sqlite';

try {
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // Create table if not exists
    $pdo->exec("
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
    ");

    // Seed initial colorful global champions if table is empty
    $count = (int)$pdo->query("SELECT COUNT(*) FROM leaderboard")->fetchColumn();
    if ($count === 0) {
        $seeds = [
            ['PetuniaTheMenace', 99, 91, 24, 114, 'Velvet Rose, Gas-Powered Chainsaw & Stolen Traffic Cone', '🏆 Grandmaster of Questionable Arrangements'],
            ['ForkliftBotanist', 96, 88, 19, 109, 'Giant Sunflower, 16-lb Bowling Ball & Hi-Vis Safety Vest', '🦺 OSHA-Certified Florist'],
            ['GnomeWhisperer84', 94, 85, 15, 106, 'Mystic Orchid, Judgmental Garden Gnome & Groovy Lava Lamp', '🧙 Ceramic Intimidation Specialist'],
            ['ChainsawRomeo', 91, 82, 14, 102, 'Blushing Lush Peony, Smooth Jazz Saxophone & CO2 Fire Extinguisher', '🎷 Smooth-Jazz Hazard'],
            ['AuntMildredsWrath', 88, 79, 12, 98, 'Solemn Stargazer Lily, 12-lb Aged Cheddar Wheel & Ceremonial Plunger', '🧀 Dairy & Plunger Visionary'],
            ['DandelionPirate', 84, 76, 10, 94, 'Sidewalk Dandelion Weed, Squeaky Rubber Duck & Foam Pool Noodle', '🦆 Aquatic Whimsy Artisan'],
            ['TinfoilTulip', 79, 72, 8, 88, 'Spring Tulip, Deluxe Tinfoil Hat & Haunted Crystal Ball', '👽 Paranormal Stem Arranger']
        ];
        $stmt = $pdo->prepare("
            INSERT INTO leaderboard (nametag, score, avgScore, served, rating, signatureBouquet, badge, updatedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $now = time();
        foreach ($seeds as $s) {
            $stmt->execute([$s[0], $s[1], $s[2], $s[3], $s[4], $s[5], $s[6], $now]);
        }
    }

    $orderBy = "score DESC, avgScore DESC, served DESC, rating DESC";

    // Handle POST: Upsert player's florist nametag & score
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $raw = file_get_contents('php://input');
        $body = json_decode($raw, true);
        if (!is_array($body) || empty(trim($body['nametag'] ?? ''))) {
            http_response_code(400);
            echo json_encode(['error' => 'Missing florist nametag']);
            exit;
        }

        $nametag = substr(trim($body['nametag']), 0, 22);
        $score = max(0, min(100, (int)($body['score'] ?? 0)));
        $avgScore = max(0, min(100, (int)($body['avgScore'] ?? $score)));
        $served = max(1, (int)($body['served'] ?? 1));
        $signature = substr(trim($body['signatureBouquet'] ?? 'Bespoke Mystery Arrangement'), 0, 90);
        $badge = substr(trim($body['badge'] ?? '🌺 Certified Florist'), 0, 60);

        // Check existing row to preserve highest peak score
        $existingStmt = $pdo->prepare("SELECT * FROM leaderboard WHERE nametag = ? COLLATE NOCASE");
        $existingStmt->execute([$nametag]);
        $existing = $existingStmt->fetch();

        if ($existing) {
            $bestScore = max((int)$existing['score'], $score);
            $bestSig = ($score >= (int)$existing['score']) ? $signature : $existing['signatureBouquet'];
            $bestBadge = ($score >= (int)$existing['score']) ? $badge : $existing['badge'];
            $totalServed = max((int)$existing['served'], $served);
        } else {
            $bestScore = $score;
            $bestSig = $signature;
            $bestBadge = $badge;
            $totalServed = $served;
        }

        $volBonus = min(25, (int)round(log($totalServed + 1, 2) * 4.5));
        $rating = (int)round($avgScore * 0.7 + $bestScore * 0.3 + $volBonus);

        $upsert = $pdo->prepare("
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
        ");
        $upsert->execute([$nametag, $bestScore, $avgScore, $totalServed, $rating, $bestSig, $bestBadge, time()]);
    }

    // Check if looking up a friend by nametag: GET ?search=...
    $search = trim($_GET['search'] ?? '');
    if ($search !== '') {
        $allRows = $pdo->query("SELECT * FROM leaderboard ORDER BY $orderBy")->fetchAll();
        $matches = [];
        foreach ($allRows as $idx => $row) {
            if (stripos($row['nametag'], $search) !== false) {
                $row['rank'] = $idx + 1;
                $row['score'] = (int)$row['score'];
                $row['avgScore'] = (int)$row['avgScore'];
                $row['served'] = (int)$row['served'];
                $row['rating'] = (int)$row['rating'];
                $matches[] = $row;
            }
        }
        echo json_encode(['matches' => array_slice($matches, 0, 10)]);
        exit;
    }

    // Default: Return Top 50 Global Leaderboard
    $rows = $pdo->query("SELECT * FROM leaderboard ORDER BY $orderBy LIMIT 50")->fetchAll();
    foreach ($rows as $idx => &$r) {
        $r['rank'] = $idx + 1;
        $r['score'] = (int)$r['score'];
        $r['avgScore'] = (int)$r['avgScore'];
        $r['served'] = (int)$r['served'];
        $r['rating'] = (int)$r['rating'];
    }
    echo json_encode(['leaderboard' => $rows]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error', 'details' => $e->getMessage()]);
}
