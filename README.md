# The World's Worst Florist 🌺🔧

> **Bespoke Arrangements & Questionable Objects**  
> A comedic browser game where customers request floral arrangements for wildly specific, bizarre life crises—and the player assembles custom bouquets from delicate flowers and completely inappropriate household objects.

---

## 🎮 Gameplay Overview

Customers enter your flower shop with peculiar emotional dilemmas:
- *"My brother accidentally bought a duck at a hardware store auction."*
- *"My coworker successfully fought a Canadian goose in the office parking lot."*
- *"I'm apologizing to my landlord for accidentally releasing 400 bees indoors."*
- *"My neighbor survived a riding lawnmower incident involving an inflatable pool."*

Your job is to construct the perfect arrangement. This is **not** a failure simulator: the goal is to satisfy the customer's emotional needs by combining standard blooms with items like gas-powered chainsaws, traffic cones, bowling balls, and garden gnomes.

### Core Loop
1. **Review Customer Request & Vibes**: Inspect the customer's request and note their target emotional traits (e.g. *Whimsy*, *Toughness*, *Danger*, *Comfort*).
2. **Assemble the Bouquet**: Drag or click items into the wrapping cone (up to 8 items). Choose your wrapping paper style (Kraft, Velvet Romance, Caution Stripes, Heavy Foil, Newspaper).
3. **Present the Bouquet**: Hand it over to calculate the score (0–100 PTS), view the customer's live animated reaction, read procedural commentary, and check your leaderboard standing.

---

## ✨ Features

- **44 Custom-Illustrated Items**:
  - **14 Flowers**: Velvet Rose, Spring Tulip, Giant Sunflower, Meadow Daisy, Mystic Orchid, Carnation, Stargazer Lily, Baby's Breath, Calming Lavender, Venus Flytrap, Bird of Paradise, Lush Peony, Sidewalk Dandelion, Gothic Midnight Rose.
  - **30 Questionable Objects**: Chainsaw, Stolen Traffic Cone, 16-lb Bowling Ball, Judgmental Garden Gnome, Rubber Duck, Screaming Rubber Chicken, Lawn Flamingo, Pool Noodle, Disco Ball, Toaster, Leaf Blower, Bike Helmet, Yard Rake, Safety Vest, Toolbox, Plunger, Trophy, Fire Extinguisher, Crystal Ball, Megaphone, Teddy Bear, Cheddar Cheese Wheel, Boxing Glove, Cinderblock, Saxophone, Tinfoil Hat, Piñata, Wheel Boot, and more.
- **240+ Handcrafted Situations & Procedural Combinator**: Hundreds of distinct customer scenarios spanning wildlife encounters, suburban turf wars, DIY mishaps, and chaotic celebrations.
- **Hidden Attribute Scoring & Synergies**: Secret item traits scored against customer desires, plus Easter egg synergy bonuses (*OSHA Violation Special*, *Smooth Jazz & Cheddar*, *Maximum Decibel Slapstick*, *Suburban Dominance*, etc.).
- **Live Comedy Physics & Random Events**: Ducks hopping, chainsaws idling, gnomes tipping, toaster ejecting rye bread, and flamingo spins.
- **Procedural Web Audio**: Zero-dependency audio synthesizer creating custom squeaks, engine revs, heavy thuds, shop bells, fanfare, and an optional background tune.
- **Global Leaderboard with "Look Up Friend"**:
  - Custom **Florist Nametag** customization.
  - Multi-tier ranking: **Best Single Score** → **Average Score** → **Runs Served** → **Overall Florist Rating Index**.
  - Search tool to look up any friend's global ranking and signature bouquet.

---

## 🚀 Running Locally

The game uses modern ES modules and can run with either Node.js or Python.

### Option A: Node.js (Recommended)
```bash
npm start
```
Open **`http://localhost:8000`** in your browser.  
*(Uses Node's built-in SQLite engine to persist scores to `api/leaderboard.sqlite`)*

### Option B: Python
```bash
python server.py
```
Open **`http://localhost:8000`** in your browser.  
*(Uses Python's standard library `sqlite3`)*

---

## 🌐 Deploying to Public Web Hosting (JetHost / cPanel)

The project is built to deploy seamlessly on standard cPanel/LiteSpeed web hosting (such as JetHost):

### Quick Upload (Zero Daemon Configuration)
Upload the repository files directly into your subdomain or domain's document root (`public_html` or subdomain folder):

```text
your-site-root/
├── index.html
├── package.json
├── server.js               (Optional for Node hosting)
├── server.py               (Optional for Python hosting)
├── api/
│   └── leaderboard.php     (Handles SQLite storage automatically on PHP/LiteSpeed)
├── css/
│   └── styles.css
└── js/
    ├── main.js
    ├── data/
    │   ├── customers.js
    │   └── items.js
    └── engine/
        ├── audio.js
        ├── scoring.js
        └── storage.js
```

- When hosted on PHP-enabled web servers, `api/leaderboard.php` automatically initializes and reads/writes to `api/leaderboard.sqlite` with PDO SQLite.
- If deployed through cPanel's **Setup Node.js App**, set the startup file to `server.js` and run `npm start`.

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, modern JavaScript (ES Modules).
- **Graphics**: Handcrafted inline SVG vector illustrations and dynamic animated SVG avatars.
- **Audio**: Web Audio API (zero external sound files).
- **Storage/Backend**: SQLite with multi-runtime support (Node.js `node:sqlite`, Python `sqlite3`, and PHP PDO SQLite) + browser `localStorage` fallback.
- **Dependencies**: 0 external dependencies, no build steps, no frameworks, no CDNs required.

---

## 📜 License

MIT License. Have fun arranging chainsaws and tulips!
