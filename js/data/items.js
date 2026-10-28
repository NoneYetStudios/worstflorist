// ==========================================================================
// THE WORLD'S WORST FLORIST - Inventory & Hidden Attribute Definitions
// 42 Custom-Illustrated Items (14 Flowers + 28 Questionable Objects)
// ==========================================================================

export const TRAIT_METADATA = {
  romance:       { label: 'Romance',       icon: '💘', clue: 'Romantic & Passionate' },
  beauty:        { label: 'Beauty',        icon: '✨', clue: 'Pretty & Aesthetic' },
  happiness:     { label: 'Happiness',     icon: '☀️', clue: 'Cheerful & Uplifting' },
  friendliness:  { label: 'Friendliness',  icon: '🤝', clue: 'Warm & Neighborly' },
  danger:        { label: 'Danger',        icon: '⚠️', clue: 'Mildly Threatening' },
  toughness:     { label: 'Toughness',     icon: '💪', clue: 'Rugged & Indestructible' },
  excitement:    { label: 'Excitement',    icon: '⚡', clue: 'High-Octane Thrills' },
  safety:        { label: 'Safety',        icon: '🦺', clue: 'OSHA-Compliant Protection' },
  whimsy:        { label: 'Whimsy',        icon: '🦄', clue: 'Playful & Silly' },
  weirdness:     { label: 'Weirdness',     icon: '👽', clue: 'Deeply Unexplained' },
  seriousness:   { label: 'Seriousness',   icon: '🪨', clue: 'Solemn & Heavy-Duty' },
  weight:        { label: 'Weight',        icon: '🏋️', clue: 'Physically Crushing' },
  caution:       { label: 'Caution',       icon: '🚧', clue: 'Warning & Boundary-Setting' },
  confusion:     { label: 'Confusion',     icon: '❓', clue: 'Baffling & Bewildering' },
  mystery:       { label: 'Mystery',       icon: '🔮', clue: 'Cryptic & Enigmatic' },
  encouragement: { label: 'Encouragement', icon: '📣', clue: 'Supportive & Rah-Rah' },
  celebration:   { label: 'Celebration',   icon: '🎉', clue: 'Party & Festive Vibes' },
  apology:       { label: 'Apology',       icon: '🙇', clue: 'Remorseful & Peace-Offering' },
  comfort:       { label: 'Comfort',       icon: '🍞', clue: 'Cozy & Soothing' },
  utility:       { label: 'Utility',       icon: '🔧', clue: 'Practical & Handy' },
  chaos:         { label: 'Chaos',         icon: '🌪️', clue: 'Unhinged Mayhem' }
};

export const INVENTORY_ITEMS = [
  // =========================================================================
  // FLOWERS (14)
  // =========================================================================
  {
    id: 'rose',
    name: 'Velvet Rose',
    category: 'flower',
    tagline: 'Classic romance (+thorns)',
    sizeScale: 1.0,
    stemHeight: 155,
    attributes: { romance: 9, beauty: 7, apology: 5, seriousness: 3 },
    flavorNotes: ['a suspiciously passionate red rose', 'the classic romantic rose'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 55 Q46 95 50 125" stroke="#2d6a4f" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M48 82 L38 78 L48 74 Z" fill="#1b4332"/>
      <path d="M52 98 L62 94 L52 90 Z" fill="#1b4332"/>
      <ellipse cx="35" cy="86" rx="13" ry="7" transform="rotate(-25 35 86)" fill="#40916c" stroke="#1b4332" stroke-width="3"/>
      <ellipse cx="65" cy="74" rx="13" ry="7" transform="rotate(25 65 74)" fill="#40916c" stroke="#1b4332" stroke-width="3"/>
      <circle cx="50" cy="38" r="24" fill="#e63946" stroke="#2c1a10" stroke-width="4"/>
      <path d="M34 34 Q50 16 66 34 Q58 54 50 54 Q42 54 34 34 Z" fill="#ff4d6d" stroke="#2c1a10" stroke-width="3.5"/>
      <path d="M40 34 Q50 24 60 34 Q50 45 40 34 Z" fill="#ff758f" stroke="#2c1a10" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'tulip',
    name: 'Spring Tulip',
    category: 'flower',
    tagline: 'Polite forgiveness bloom',
    sizeScale: 0.96,
    stemHeight: 150,
    attributes: { apology: 8, friendliness: 7, beauty: 6, encouragement: 5, happiness: 4 },
    flavorNotes: ['a polite pink tulip', 'a cheerful spring tulip'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 55 Q53 90 50 125" stroke="#52b788" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M48 110 Q25 85 32 62 Q44 82 49 102 Z" fill="#40916c" stroke="#2c1a10" stroke-width="3"/>
      <path d="M30 35 Q30 62 50 62 Q70 62 70 35 L62 20 L50 32 L38 20 Z" fill="#ff70a6" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
      <path d="M40 24 L50 36 L60 24" fill="none" stroke="#ff9ebb" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'sunflower',
    name: 'Giant Sunflower',
    category: 'flower',
    tagline: 'Weaponized optimism',
    sizeScale: 1.18,
    stemHeight: 170,
    attributes: { happiness: 10, friendliness: 7, encouragement: 8, celebration: 6 },
    flavorNotes: ['an aggressively cheerful sunflower', 'the beaming sunflower'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 58 L50 125" stroke="#2d6a4f" stroke-width="8" stroke-linecap="round"/>
      <ellipse cx="32" cy="90" rx="15" ry="8" transform="rotate(-20 32 90)" fill="#52b788" stroke="#2c1a10" stroke-width="3"/>
      <g stroke="#2c1a10" stroke-width="3" fill="#ffb703">
        <circle cx="50" cy="14" r="9"/><circle cx="68" cy="20" r="9"/><circle cx="76" cy="38" r="9"/>
        <circle cx="68" cy="56" r="9"/><circle cx="50" cy="62" r="9"/><circle cx="32" cy="56" r="9"/>
        <circle cx="24" cy="38" r="9"/><circle cx="32" cy="20" r="9"/>
      </g>
      <circle cx="50" cy="38" r="18" fill="#582f0e" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="44" cy="35" r="2.5" fill="#fff"/>
      <circle cx="56" cy="35" r="2.5" fill="#fff"/>
      <path d="M43 43 Q50 49 57 43" stroke="#ffb703" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'daisy',
    name: 'Meadow Daisy',
    category: 'flower',
    tagline: 'Innocent & totally harmless',
    sizeScale: 0.92,
    stemHeight: 145,
    attributes: { friendliness: 9, whimsy: 6, happiness: 7, comfort: 6, safety: 4 },
    flavorNotes: ['a wonderfully innocent daisy', 'a sweet little meadow daisy'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 52 Q45 90 50 125" stroke="#52b788" stroke-width="6" fill="none" stroke-linecap="round"/>
      <g fill="#ffffff" stroke="#2c1a10" stroke-width="3">
        <ellipse cx="50" cy="18" rx="7" ry="14"/>
        <ellipse cx="50" cy="58" rx="7" ry="14"/>
        <ellipse cx="30" cy="38" rx="14" ry="7"/>
        <ellipse cx="70" cy="38" rx="14" ry="7"/>
        <ellipse cx="36" cy="24" rx="7" ry="13" transform="rotate(-45 36 24)"/>
        <ellipse cx="64" cy="24" rx="7" ry="13" transform="rotate(45 64 24)"/>
        <ellipse cx="36" cy="52" rx="7" ry="13" transform="rotate(45 36 52)"/>
        <ellipse cx="64" cy="52" rx="7" ry="13" transform="rotate(-45 64 52)"/>
      </g>
      <circle cx="50" cy="38" r="11" fill="#ffd166" stroke="#2c1a10" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'orchid',
    name: 'Mystic Orchid',
    category: 'flower',
    tagline: 'Dramatic & slightly cryptic',
    sizeScale: 1.05,
    stemHeight: 162,
    attributes: { mystery: 9, beauty: 9, romance: 6, weirdness: 5, seriousness: 4 },
    flavorNotes: ['an exotic purple orchid', 'a theatrical, mysterious orchid'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 50 Q56 90 48 125" stroke="#2d6a4f" stroke-width="6" fill="none" stroke-linecap="round"/>
      <g stroke="#2c1a10" stroke-width="3.5" fill="#c77dff">
        <ellipse cx="50" cy="20" rx="10" ry="16"/>
        <ellipse cx="28" cy="38" rx="16" ry="11" transform="rotate(-15 28 38)"/>
        <ellipse cx="72" cy="38" rx="16" ry="11" transform="rotate(15 72 38)"/>
        <ellipse cx="38" cy="56" rx="11" ry="14" transform="rotate(20 38 56)"/>
        <ellipse cx="62" cy="56" rx="11" ry="14" transform="rotate(-20 62 56)"/>
      </g>
      <circle cx="50" cy="40" r="10" fill="#7b2cbf" stroke="#2c1a10" stroke-width="3"/>
      <circle cx="50" cy="40" r="4" fill="#ffd166"/>
    </svg>`
  },
  {
    id: 'carnation',
    name: 'Ruffled Carnation',
    category: 'flower',
    tagline: 'Sturdy prom-night energy',
    sizeScale: 0.95,
    stemHeight: 148,
    attributes: { celebration: 7, encouragement: 8, comfort: 6, apology: 6, romance: 4 },
    flavorNotes: ['a frilly pink carnation', 'a dependable supermarket carnation'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 55 L50 125" stroke="#40916c" stroke-width="6" stroke-linecap="round"/>
      <path d="M42 54 L58 54 L54 68 L46 68 Z" fill="#2d6a4f" stroke="#2c1a10" stroke-width="3"/>
      <circle cx="50" cy="36" r="22" fill="#ff8fab" stroke="#2c1a10" stroke-width="3.5" stroke-dasharray="6 3"/>
      <circle cx="50" cy="36" r="14" fill="#fb6f92" stroke="#2c1a10" stroke-width="3" stroke-dasharray="5 3"/>
      <circle cx="50" cy="36" r="6" fill="#ffccd5"/>
    </svg>`
  },
  {
    id: 'lily',
    name: 'Solemn Stargazer Lily',
    category: 'flower',
    tagline: 'Dramatic soap-opera gravity',
    sizeScale: 1.08,
    stemHeight: 165,
    attributes: { seriousness: 9, beauty: 8, comfort: 7, apology: 7, mystery: 5 },
    flavorNotes: ['a deeply dramatic lily', 'a solemn, heavily-scented lily'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 54 L50 125" stroke="#2d6a4f" stroke-width="6.5" stroke-linecap="round"/>
      <g fill="#f8edeb" stroke="#2c1a10" stroke-width="3.5" stroke-linejoin="round">
        <path d="M50 8 L60 36 L50 45 L40 36 Z"/>
        <path d="M16 32 L44 34 L48 45 L26 50 Z"/>
        <path d="M84 32 L56 34 L52 45 L74 50 Z"/>
        <path d="M28 66 L45 42 L55 46 L44 68 Z"/>
        <path d="M72 66 L55 42 L45 46 L56 68 Z"/>
      </g>
      <circle cx="50" cy="40" r="5" fill="#e63946"/>
      <line x1="50" y1="40" x2="42" y2="26" stroke="#d62828" stroke-width="2.5"/>
      <line x1="50" y1="40" x2="58" y2="26" stroke="#d62828" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: 'baby_breath',
    name: 'Panic Baby’s Breath',
    category: 'flower',
    tagline: 'Hides questionable life choices',
    sizeScale: 1.05,
    stemHeight: 152,
    attributes: { comfort: 7, whimsy: 5, beauty: 5, confusion: 4, friendliness: 6 },
    flavorNotes: ['a cloud of filler baby’s breath', 'some frantic sprigs of baby’s breath'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 125 L50 60 M50 85 L28 45 M50 80 L72 45 M50 68 L36 28 M50 68 L64 28" stroke="#52b788" stroke-width="4" stroke-linecap="round"/>
      <g fill="#ffffff" stroke="#2c1a10" stroke-width="2.5">
        <circle cx="26" cy="42" r="7"/><circle cx="36" cy="24" r="7"/><circle cx="50" cy="18" r="8"/>
        <circle cx="64" cy="24" r="7"/><circle cx="74" cy="42" r="7"/><circle cx="48" cy="44" r="7"/>
        <circle cx="34" cy="56" r="6"/><circle cx="66" cy="56" r="6"/>
      </g>
    </svg>`
  },
  {
    id: 'lavender',
    name: 'Calming Lavender',
    category: 'flower',
    tagline: 'Aggressive aromatherapy',
    sizeScale: 1.02,
    stemHeight: 162,
    attributes: { comfort: 10, safety: 6, apology: 6, beauty: 6, chaos: -5 },
    flavorNotes: ['a soothing bundle of fragrant lavender', 'calming purple lavender sprigs'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 125 L50 22 M36 125 L44 34 M64 125 L56 34" stroke="#40916c" stroke-width="4.5" stroke-linecap="round"/>
      <g fill="#9d4edd" stroke="#2c1a10" stroke-width="2.5">
        <ellipse cx="50" cy="22" rx="6" ry="9"/><ellipse cx="50" cy="36" rx="7" ry="8"/><ellipse cx="50" cy="50" rx="7" ry="8"/>
        <ellipse cx="40" cy="36" rx="5" ry="8"/><ellipse cx="42" cy="50" rx="6" ry="8"/>
        <ellipse cx="60" cy="36" rx="5" ry="8"/><ellipse cx="58" cy="50" rx="6" ry="8"/>
      </g>
    </svg>`
  },
  {
    id: 'flytrap',
    name: 'Snapper Venus Flytrap',
    category: 'flower',
    tagline: 'Bites fingers out of affection',
    sizeScale: 1.15,
    stemHeight: 160,
    attributes: { danger: 8, weirdness: 9, excitement: 7, caution: 6, toughness: 6 },
    flavorNotes: ['a snapping carnivorous Venus flytrap', 'a hungry little Venus flytrap'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 125 Q38 85 50 52" stroke="#52b788" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M22 44 C22 14, 78 14, 78 44 Z" fill="#70e000" stroke="#2c1a10" stroke-width="4"/>
      <path d="M26 44 C32 62, 68 62, 74 44 Z" fill="#ff4d6d" stroke="#2c1a10" stroke-width="3.5"/>
      <polyline points="26,44 32,34 38,44 44,34 50,44 56,34 62,44 68,34 74,44" fill="none" stroke="#2c1a10" stroke-width="3" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'bird_paradise',
    name: 'Bird of Paradise',
    category: 'flower',
    tagline: 'Tropical plumage with an attitude',
    sizeScale: 1.18,
    stemHeight: 174,
    attributes: { excitement: 8, beauty: 9, celebration: 8, whimsy: 7 },
    flavorNotes: ['a flamboyant tropical Bird of Paradise', 'a spiky orange Bird of Paradise'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M46 125 L52 55" stroke="#2d6a4f" stroke-width="7" stroke-linecap="round"/>
      <polygon points="48,56 84,18 68,54" fill="#ff9f1c" stroke="#2c1a10" stroke-width="3.5" stroke-linejoin="round"/>
      <polygon points="44,56 64,12 56,54" fill="#ffbf69" stroke="#2c1a10" stroke-width="3.5" stroke-linejoin="round"/>
      <polygon points="46,56 38,16 50,52" fill="#3a86ff" stroke="#2c1a10" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M20 56 Q52 46 82 54 Q52 72 20 56 Z" fill="#52b788" stroke="#2c1a10" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'peony',
    name: 'Blushing Lush Peony',
    category: 'flower',
    tagline: 'Over-the-top bridal drama',
    sizeScale: 1.14,
    stemHeight: 158,
    attributes: { romance: 10, beauty: 10, celebration: 7, comfort: 6 },
    flavorNotes: ['an absurdly lush pink peony', 'a cloud-like romantic peony'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 56 L50 125" stroke="#40916c" stroke-width="7" stroke-linecap="round"/>
      <circle cx="50" cy="38" r="26" fill="#ff758f" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="42" cy="34" r="16" fill="#ff8fa3" stroke="#2c1a10" stroke-width="3"/>
      <circle cx="58" cy="36" r="16" fill="#ff8fa3" stroke="#2c1a10" stroke-width="3"/>
      <circle cx="50" cy="42" r="13" fill="#ffb3c1" stroke="#2c1a10" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'dandelion',
    name: 'Sidewalk Dandelion Weed',
    category: 'flower',
    tagline: 'Pulled from the parking lot crack',
    sizeScale: 0.94,
    stemHeight: 146,
    attributes: { toughness: 8, whimsy: 8, encouragement: 7, confusion: 6, friendliness: 5 },
    flavorNotes: ['a scrappy sidewalk dandelion', 'a fuzzy wish-making dandelion puff'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 52 L50 125" stroke="#70e000" stroke-width="6" stroke-linecap="round"/>
      <polygon points="50,82 28,70 36,92" fill="#52b788" stroke="#2c1a10" stroke-width="3"/>
      <circle cx="50" cy="36" r="22" fill="rgba(255,255,255,0.88)" stroke="#2c1a10" stroke-width="3" stroke-dasharray="4 4"/>
      <circle cx="50" cy="36" r="6" fill="#582f0e"/>
    </svg>`
  },
  {
    id: 'black_rose',
    name: 'Gothic Midnight Rose',
    category: 'flower',
    tagline: 'For poetic angst & mild hexes',
    sizeScale: 1.04,
    stemHeight: 158,
    attributes: { mystery: 10, seriousness: 9, romance: 7, danger: 6, happiness: -4 },
    flavorNotes: ['a brooding velvet-black gothic rose', 'a mysterious midnight rose'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M50 55 Q46 95 50 125" stroke="#1b4332" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="50" cy="38" r="24" fill="#2b2d42" stroke="#2c1a10" stroke-width="4"/>
      <path d="M34 34 Q50 16 66 34 Q58 54 50 54 Q42 54 34 34 Z" fill="#3c096c" stroke="#2c1a10" stroke-width="3.5"/>
      <path d="M40 34 Q50 24 60 34 Q50 45 40 34 Z" fill="#5a189a" stroke="#2c1a10" stroke-width="3"/>
    </svg>`
  },

  // =========================================================================
  // QUESTIONABLE ADDITIONS (28)
  // =========================================================================
  {
    id: 'cactus',
    name: 'Prickly Saguaro Cactus',
    category: 'object',
    tagline: 'Hugs back with needles',
    sizeScale: 1.22,
    stemHeight: 168,
    attributes: { danger: 8, toughness: 9, caution: 6, seriousness: 5, comfort: -5 },
    flavorNotes: ['a weaponized potted cactus', 'an aggressively spiky cactus'],
    svg: `<svg viewBox="0 0 100 130">
      <rect x="38" y="20" width="24" height="88" rx="12" fill="#40916c" stroke="#2c1a10" stroke-width="4"/>
      <path d="M38 64 L22 64 Q16 64 16 56 L16 38 Q16 30 24 30 Q32 30 32 38 L32 50 L38 50" fill="#52b788" stroke="#2c1a10" stroke-width="4"/>
      <path d="M62 54 L78 54 Q84 54 84 46 L84 32 Q84 24 76 24 Q68 24 68 32 L68 42 L62 42" fill="#52b788" stroke="#2c1a10" stroke-width="4"/>
      <polygon points="30,98 70,98 64,124 36,124" fill="#bc6c25" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="50" cy="18" r="6" fill="#ff4d6d" stroke="#2c1a10" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: 'gnome',
    name: 'Judgmental Garden Gnome',
    category: 'object',
    tagline: 'Stares into the recipient’s soul',
    sizeScale: 1.32,
    stemHeight: 175,
    attributes: { whimsy: 10, weirdness: 8, mystery: 6, friendliness: 5, confusion: 6 },
    flavorNotes: ['a ceramic garden gnome with unblinking eyes', 'a pointy-hatted garden gnome'],
    svg: `<svg viewBox="0 0 100 130">
      <polygon points="50,6 22,56 78,56" fill="#e63946" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
      <rect x="28" y="82" width="44" height="38" rx="10" fill="#1d3557" stroke="#2c1a10" stroke-width="4"/>
      <path d="M24 66 Q50 116 76 66 Z" fill="#ffffff" stroke="#2c1a10" stroke-width="4"/>
      <ellipse cx="50" cy="60" rx="22" ry="13" fill="#ffcad4" stroke="#2c1a10" stroke-width="3.5"/>
      <circle cx="50" cy="63" r="7" fill="#f4a261" stroke="#2c1a10" stroke-width="3"/>
      <circle cx="40" cy="56" r="3" fill="#2c1a10"/>
      <circle cx="60" cy="56" r="3" fill="#2c1a10"/>
    </svg>`
  },
  {
    id: 'cone',
    name: 'Stolen Traffic Cone',
    category: 'object',
    tagline: 'Screams “yield immediately”',
    sizeScale: 1.35,
    stemHeight: 174,
    attributes: { caution: 10, safety: 8, confusion: 7, seriousness: 5, utility: 5 },
    flavorNotes: ['a high-visibility municipal traffic cone', 'an entire orange traffic cone'],
    svg: `<svg viewBox="0 0 100 130">
      <polygon points="16,112 84,112 90,122 10,122" fill="#ff6b00" stroke="#2c1a10" stroke-width="4"/>
      <polygon points="43,16 57,16 78,112 22,112" fill="#ff7b00" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
      <polygon points="36,46 64,46 68,64 32,64" fill="#ffffff" stroke="#2c1a10" stroke-width="3"/>
      <polygon points="29,78 71,78 74,94 26,94" fill="#ffffff" stroke="#2c1a10" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'bowling_ball',
    name: '16-lb Bowling Ball',
    category: 'object',
    tagline: 'Crushing emotional gravity',
    sizeScale: 1.38,
    stemHeight: 160,
    attributes: { seriousness: 10, weight: 10, toughness: 8, danger: 5, confusion: 6 },
    flavorNotes: ['a 16-pound regulation bowling ball', 'a marbleized bowling ball crushing the stems'],
    svg: `<svg viewBox="0 0 100 130">
      <circle cx="50" cy="64" r="40" fill="#2b2d42" stroke="#2c1a10" stroke-width="4.5"/>
      <path d="M26 42 A30 30 0 0 1 65 32" stroke="#8d99ae" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="42" cy="48" r="5" fill="#0f172a" stroke="#fff" stroke-width="1.5"/>
      <circle cx="58" cy="46" r="5" fill="#0f172a" stroke="#fff" stroke-width="1.5"/>
      <circle cx="50" cy="61" r="5" fill="#0f172a" stroke="#fff" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: 'chainsaw',
    name: 'Gas-Powered Chainsaw',
    category: 'object',
    tagline: 'Idling at 3,000 RPM',
    sizeScale: 1.48,
    stemHeight: 185,
    attributes: { excitement: 10, danger: 10, chaos: 10, toughness: 9, safety: -10, comfort: -6 },
    flavorNotes: ['a live gas-powered chainsaw', 'an idling two-stroke chainsaw'],
    svg: `<svg viewBox="0 0 100 130">
      <rect x="38" y="10" width="24" height="68" rx="11" fill="#adb5bd" stroke="#2c1a10" stroke-width="4" stroke-dasharray="6 3"/>
      <rect x="44" y="18" width="12" height="50" rx="5" fill="#dee2e6"/>
      <rect x="24" y="68" width="52" height="42" rx="10" fill="#e63946" stroke="#2c1a10" stroke-width="4"/>
      <rect x="32" y="76" width="24" height="18" rx="4" fill="#ffb703" stroke="#2c1a10" stroke-width="3"/>
      <path d="M24 82 L12 82 L12 104 L24 104" fill="none" stroke="#2c1a10" stroke-width="5" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'lava_lamp',
    name: 'Groovy Lava Lamp',
    category: 'object',
    tagline: 'Hypnotic 1970s blob energy',
    sizeScale: 1.28,
    stemHeight: 172,
    attributes: { mystery: 10, weirdness: 9, comfort: 6, romance: 5, whimsy: 6 },
    flavorNotes: ['a plugged-in 1970s lava lamp', 'a hypnotic bubbling lava lamp'],
    svg: `<svg viewBox="0 0 100 130">
      <polygon points="42,12 58,12 62,28 38,28" fill="#7209b7" stroke="#2c1a10" stroke-width="3.5"/>
      <polygon points="38,28 62,28 70,88 30,88" fill="#4cc9f0" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="48" cy="46" r="9" fill="#f72585"/>
      <ellipse cx="52" cy="70" rx="12" ry="9" fill="#f72585"/>
      <polygon points="30,88 70,88 60,118 40,118" fill="#7209b7" stroke="#2c1a10" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'rubber_duck',
    name: 'Squeaky Rubber Duck',
    category: 'object',
    tagline: 'Unconditional bath-time support',
    sizeScale: 1.16,
    stemHeight: 158,
    attributes: { whimsy: 10, happiness: 8, friendliness: 8, encouragement: 7, confusion: 5 },
    flavorNotes: ['a bright yellow rubber duck', 'a squeaky bath duck'],
    svg: `<svg viewBox="0 0 100 130">
      <ellipse cx="52" cy="78" rx="30" ry="22" fill="#ffd166" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="38" cy="46" r="18" fill="#ffd166" stroke="#2c1a10" stroke-width="4"/>
      <polygon points="20,42 8,47 22,53" fill="#fb8500" stroke="#2c1a10" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="33" cy="42" r="3.5" fill="#2c1a10"/>
      <path d="M45 75 Q60 66 68 78 Q58 90 45 75 Z" fill="#ffb703" stroke="#2c1a10" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'flamingo',
    name: 'Plastic Lawn Flamingo',
    category: 'object',
    tagline: 'Aggressive suburban panache',
    sizeScale: 1.44,
    stemHeight: 184,
    attributes: { whimsy: 9, celebration: 8, weirdness: 8, beauty: 6, excitement: 5 },
    flavorNotes: ['a neon-pink plastic lawn flamingo', 'a full-sized yard flamingo on wire legs'],
    svg: `<svg viewBox="0 0 100 130">
      <line x1="48" y1="78" x2="48" y2="124" stroke="#f4a261" stroke-width="4"/>
      <polyline points="56,78 66,98 44,104" fill="none" stroke="#f4a261" stroke-width="4" stroke-linejoin="round"/>
      <ellipse cx="54" cy="66" rx="24" ry="16" fill="#ff4d6d" stroke="#2c1a10" stroke-width="4"/>
      <path d="M36 60 Q20 42 32 22 Q44 10 48 24" fill="none" stroke="#ff4d6d" stroke-width="11" stroke-linecap="round"/>
      <path d="M36 60 Q20 42 32 22 Q44 10 48 24" fill="none" stroke="#2c1a10" stroke-width="3" stroke-linecap="round"/>
      <polygon points="48,20 60,26 48,32" fill="#2c1a10"/>
      <circle cx="42" cy="22" r="2.5" fill="#fff"/>
    </svg>`
  },
  {
    id: 'pool_noodle',
    name: 'Foam Pool Noodle',
    category: 'object',
    tagline: 'Soft, bendy, and inexplicable',
    sizeScale: 1.42,
    stemHeight: 182,
    attributes: { safety: 8, whimsy: 8, encouragement: 6, celebration: 6, confusion: 7, seriousness: -6 },
    flavorNotes: ['a four-foot neon foam pool noodle', 'a bendy turquoise pool noodle'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M26 116 Q18 32 54 24 Q82 20 74 96" fill="none" stroke="#2c1a10" stroke-width="22" stroke-linecap="round"/>
      <path d="M26 116 Q18 32 54 24 Q82 20 74 96" fill="none" stroke="#00bbf9" stroke-width="15" stroke-linecap="round"/>
      <circle cx="74" cy="96" r="4" fill="#2c1a10"/>
    </svg>`
  },
  {
    id: 'disco_ball',
    name: 'Mirrored Disco Ball',
    category: 'object',
    tagline: 'Instant irresponsible party',
    sizeScale: 1.30,
    stemHeight: 168,
    attributes: { celebration: 10, excitement: 9, happiness: 8, beauty: 7, romance: 5 },
    flavorNotes: ['a dazzling mirrored disco ball', 'a rotating glitter disco ball'],
    svg: `<svg viewBox="0 0 100 130">
      <line x1="50" y1="6" x2="50" y2="28" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="50" cy="64" r="36" fill="#e2e8f0" stroke="#2c1a10" stroke-width="4"/>
      <path d="M16 52 H84 M16 64 H84 M16 76 H84 M38 30 V98 M50 28 V100 M62 30 V98" stroke="#475569" stroke-width="2.5"/>
      <rect x="39" y="53" width="10" height="10" fill="#ffffff"/>
      <rect x="51" y="65" width="10" height="10" fill="#38bdf8"/>
      <rect x="27" y="65" width="10" height="10" fill="#fde047"/>
    </svg>`
  },
  {
    id: 'toaster',
    name: 'Chrome 2-Slice Toaster',
    category: 'object',
    tagline: 'Includes warm emergency carbs',
    sizeScale: 1.32,
    stemHeight: 165,
    attributes: { comfort: 9, utility: 8, apology: 7, weirdness: 7, weight: 6, confusion: 6 },
    flavorNotes: ['a two-slice chrome toaster loaded with rye bread', 'a kitchen toaster still warm to the touch'],
    svg: `<svg viewBox="0 0 100 130">
      <rect x="30" y="22" width="18" height="24" rx="5" fill="#d97706" stroke="#2c1a10" stroke-width="3.5"/>
      <rect x="52" y="18" width="18" height="24" rx="5" fill="#f59e0b" stroke="#2c1a10" stroke-width="3.5"/>
      <rect x="20" y="42" width="60" height="50" rx="12" fill="#cbd5e1" stroke="#2c1a10" stroke-width="4"/>
      <rect x="28" y="52" width="36" height="10" rx="4" fill="#94a3b8"/>
      <rect x="80" y="56" width="10" height="7" rx="3" fill="#ef4444" stroke="#2c1a10" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'leaf_blower',
    name: 'Turbo Leaf Blower',
    category: 'object',
    tagline: '180 MPH of pure chaos',
    sizeScale: 1.44,
    stemHeight: 180,
    attributes: { chaos: 10, excitement: 9, utility: 7, danger: 6, toughness: 6, comfort: -6 },
    flavorNotes: ['a roaring suburban leaf blower', 'a high-velocity backpack leaf blower'],
    svg: `<svg viewBox="0 0 100 130">
      <polygon points="44,10 56,10 60,64 40,64" fill="#334155" stroke="#2c1a10" stroke-width="4"/>
      <rect x="26" y="62" width="48" height="40" rx="10" fill="#f97316" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="50" cy="82" r="12" fill="#fed7aa" stroke="#2c1a10" stroke-width="3.5"/>
      <path d="M42 4 L34 -4 M50 2 L50 -6 M58 4 L66 -4" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'helmet',
    name: 'Aero Bicycle Helmet',
    category: 'object',
    tagline: 'Because life has sharp corners',
    sizeScale: 1.24,
    stemHeight: 162,
    attributes: { safety: 10, caution: 9, encouragement: 7, comfort: 5, danger: -5 },
    flavorNotes: ['a strapped-on aerodynamic bicycle helmet', 'a sensible protective bike helmet'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M16 68 C16 30, 84 30, 84 68 Z" fill="#06d6a0" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
      <ellipse cx="38" cy="48" rx="8" ry="4" fill="#2c1a10"/>
      <ellipse cx="62" cy="48" rx="8" ry="4" fill="#2c1a10"/>
      <polyline points="28,68 50,102 72,68" fill="none" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'rake',
    name: 'Full-Sized Yard Rake',
    category: 'object',
    tagline: 'Slapstick cartoon hazard',
    sizeScale: 1.46,
    stemHeight: 188,
    attributes: { utility: 9, toughness: 7, danger: 6, seriousness: 5, whimsy: 5 },
    flavorNotes: ['a full-length yard rake sticking out three feet', 'a metal garden rake'],
    svg: `<svg viewBox="0 0 100 130">
      <line x1="50" y1="36" x2="50" y2="125" stroke="#d97706" stroke-width="7" stroke-linecap="round"/>
      <path d="M16 16 L84 16 L70 38 L30 38 Z" fill="#ef4444" stroke="#2c1a10" stroke-width="3.5" stroke-linejoin="round"/>
      <line x1="26" y1="16" x2="34" y2="36" stroke="#2c1a10" stroke-width="2.5"/>
      <line x1="50" y1="16" x2="50" y2="36" stroke="#2c1a10" stroke-width="2.5"/>
      <line x1="74" y1="16" x2="66" y2="36" stroke="#2c1a10" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: 'safety_vest',
    name: 'Hi-Vis Safety Vest',
    category: 'object',
    tagline: 'Visible from low Earth orbit',
    sizeScale: 1.30,
    stemHeight: 166,
    attributes: { safety: 10, caution: 10, utility: 6, friendliness: 4, mystery: -6 },
    flavorNotes: ['a neon reflective OSHA safety vest', 'a high-visibility crossing-guard vest'],
    svg: `<svg viewBox="0 0 100 130">
      <polygon points="24,24 40,24 50,46 60,24 76,24 80,104 20,104" fill="#ccff00" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
      <rect x="22" y="62" width="56" height="10" fill="#cbd5e1" stroke="#2c1a10" stroke-width="2.5"/>
      <rect x="22" y="82" width="56" height="10" fill="#cbd5e1" stroke="#2c1a10" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: 'toolbox',
    name: 'Steel Red Toolbox',
    category: 'object',
    tagline: 'For fixing broken relationships',
    sizeScale: 1.34,
    stemHeight: 164,
    attributes: { utility: 10, weight: 9, toughness: 8, seriousness: 7, encouragement: 5 },
    flavorNotes: ['a rattling steel toolbox full of wrenches', 'a heavy red mechanic’s toolbox'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M36 44 L36 32 L64 32 L64 44" fill="none" stroke="#2c1a10" stroke-width="5" stroke-linejoin="round"/>
      <rect x="18" y="44" width="64" height="48" rx="6" fill="#dc2626" stroke="#2c1a10" stroke-width="4"/>
      <line x1="18" y1="64" x2="82" y2="64" stroke="#2c1a10" stroke-width="3.5"/>
      <rect x="44" y="58" width="12" height="12" rx="2" fill="#fbbf24" stroke="#2c1a10" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'plunger',
    name: 'Ceremonial Plunger',
    category: 'object',
    tagline: 'Handles deep emotional blockages',
    sizeScale: 1.36,
    stemHeight: 180,
    attributes: { apology: 8, utility: 8, chaos: 7, weirdness: 8, confusion: 7, beauty: -5 },
    flavorNotes: ['a brand-new rubber bathroom plunger', 'a majestic wooden-handled plunger'],
    svg: `<svg viewBox="0 0 100 130">
      <line x1="50" y1="42" x2="50" y2="124" stroke="#d97706" stroke-width="8" stroke-linecap="round"/>
      <path d="M22 48 C22 18, 78 18, 78 48 Z" fill="#e11d48" stroke="#2c1a10" stroke-width="4"/>
      <rect x="18" y="46" width="64" height="10" rx="4" fill="#be123c" stroke="#2c1a10" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'trophy',
    name: '“You Tried” Trophy',
    category: 'object',
    tagline: 'Gold-plated participation glory',
    sizeScale: 1.26,
    stemHeight: 168,
    attributes: { celebration: 9, encouragement: 10, happiness: 8, friendliness: 6, seriousness: 4 },
    flavorNotes: ['a shiny plastic participation trophy', 'a golden bowling trophy with the nameplate scratched off'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M30 24 H70 L64 62 Q50 76 36 62 Z" fill="#fbbf24" stroke="#2c1a10" stroke-width="4"/>
      <path d="M30 30 H18 Q16 50 34 52" fill="none" stroke="#fbbf24" stroke-width="5"/>
      <path d="M70 30 H82 Q84 50 66 52" fill="none" stroke="#fbbf24" stroke-width="5"/>
      <rect x="45" y="68" width="10" height="22" fill="#f59e0b" stroke="#2c1a10" stroke-width="3.5"/>
      <rect x="30" y="90" width="40" height="18" rx="3" fill="#475569" stroke="#2c1a10" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'rubber_chicken',
    name: 'Screaming Rubber Chicken',
    category: 'object',
    tagline: '110 decibels of pure slapstick',
    sizeScale: 1.36,
    stemHeight: 176,
    attributes: { whimsy: 10, chaos: 9, confusion: 8, happiness: 7, seriousness: -8 },
    flavorNotes: ['a wide-eyed screaming rubber chicken', 'a comedic rubber chicken'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M46 18 L50 8 L58 14 L54 22" fill="#e63946" stroke="#2c1a10" stroke-width="3"/>
      <circle cx="50" cy="30" r="14" fill="#ffd166" stroke="#2c1a10" stroke-width="4"/>
      <ellipse cx="50" cy="35" rx="8" ry="6" fill="#fb8500" stroke="#2c1a10" stroke-width="3"/>
      <circle cx="44" cy="25" r="3.5" fill="#fff" stroke="#2c1a10" stroke-width="2"/>
      <circle cx="56" cy="25" r="3.5" fill="#fff" stroke="#2c1a10" stroke-width="2"/>
      <rect x="45" y="42" width="10" height="26" fill="#ffd166" stroke="#2c1a10" stroke-width="3.5"/>
      <ellipse cx="50" cy="84" rx="20" ry="22" fill="#ffd166" stroke="#2c1a10" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'extinguisher',
    name: 'CO2 Fire Extinguisher',
    category: 'object',
    tagline: 'For five-alarm emotional emergencies',
    sizeScale: 1.34,
    stemHeight: 172,
    attributes: { safety: 10, caution: 9, utility: 8, weight: 7, excitement: -4 },
    flavorNotes: ['a pressurized red fire extinguisher', 'an emergency CO2 fire extinguisher'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M40 24 L68 14 M46 24 H64" stroke="#2c1a10" stroke-width="5" stroke-linecap="round"/>
      <rect x="32" y="28" width="36" height="82" rx="14" fill="#e63946" stroke="#2c1a10" stroke-width="4"/>
      <rect x="36" y="52" width="28" height="32" fill="#ffffff" stroke="#2c1a10" stroke-width="3"/>
      <path d="M32 40 Q16 55 20 88" fill="none" stroke="#2c1a10" stroke-width="6" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'ouija_planchette',
    name: 'Haunted Crystal Ball',
    category: 'object',
    tagline: 'Whispers ominous stock tips',
    sizeScale: 1.28,
    stemHeight: 162,
    attributes: { mystery: 10, weirdness: 10, confusion: 7, danger: 5, romance: 4 },
    flavorNotes: ['a glowing paranormal crystal ball', 'a haunted fortune-teller’s orb'],
    svg: `<svg viewBox="0 0 100 130">
      <polygon points="28,94 72,94 80,114 20,114" fill="#ffb703" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="50" cy="60" r="36" fill="#7209b7" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="50" cy="60" r="26" fill="#b5179e" opacity="0.6"/>
      <path d="M34 46 A20 20 0 0 1 60 36" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
      <text x="41" y="68" font-size="22">👁️</text>
    </svg>`
  },
  {
    id: 'megaphone',
    name: 'Coach’s Bullhorn Megaphone',
    category: 'object',
    tagline: 'Subtlety is for cowards',
    sizeScale: 1.35,
    stemHeight: 170,
    attributes: { encouragement: 10, excitement: 9, chaos: 8, celebration: 7, comfort: -6 },
    flavorNotes: ['a battery-powered stadium bullhorn', 'a siren-equipped megaphone'],
    svg: `<svg viewBox="0 0 100 130">
      <polygon points="22,62 78,24 78,92 22,76" fill="#ffffff" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
      <polygon points="70,28 84,20 84,96 70,88" fill="#e63946" stroke="#2c1a10" stroke-width="4"/>
      <rect x="14" y="60" width="12" height="20" rx="4" fill="#e63946" stroke="#2c1a10" stroke-width="3.5"/>
      <rect x="34" y="78" width="10" height="24" rx="3" transform="rotate(15 34 78)" fill="#2c1a10"/>
    </svg>`
  },
  {
    id: 'teddy_bear',
    name: 'One-Eyed Apology Bear',
    category: 'object',
    tagline: 'Has seen things, still loves you',
    sizeScale: 1.28,
    stemHeight: 164,
    attributes: { apology: 10, comfort: 10, friendliness: 8, romance: 7, weirdness: 5 },
    flavorNotes: ['a slightly scruffy one-eyed plush teddy bear', 'a fiercely loyal apology teddy bear'],
    svg: `<svg viewBox="0 0 100 130">
      <circle cx="28" cy="28" r="12" fill="#bc6c25" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="72" cy="28" r="12" fill="#bc6c25" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="50" cy="48" r="24" fill="#dda15e" stroke="#2c1a10" stroke-width="4"/>
      <ellipse cx="50" cy="88" rx="26" ry="24" fill="#dda15e" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="41" cy="44" r="4" fill="#2c1a10"/>
      <text x="53" y="49" font-size="14" font-weight="900">✕</text>
      <ellipse cx="50" cy="54" rx="9" ry="7" fill="#fefae0" stroke="#2c1a10" stroke-width="3"/>
      <path d="M50 80 C42 70, 32 82, 50 96 C68 82, 58 70, 50 80 Z" fill="#e63946" stroke="#2c1a10" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'cheese_wheel',
    name: '12-lb Aged Cheddar Wheel',
    category: 'object',
    tagline: 'Bribery through dairy',
    sizeScale: 1.32,
    stemHeight: 160,
    attributes: { comfort: 9, friendliness: 9, weight: 8, apology: 8, celebration: 6 },
    flavorNotes: ['an entire 12-pound wheel of aged Wisconsin cheddar', 'a massive wax-sealed cheese wheel'],
    svg: `<svg viewBox="0 0 100 130">
      <ellipse cx="50" cy="78" rx="38" ry="20" fill="#f59e0b" stroke="#2c1a10" stroke-width="4"/>
      <rect x="12" y="54" width="76" height="24" fill="#fbbf24" stroke="#2c1a10" stroke-width="4"/>
      <ellipse cx="50" cy="54" rx="38" ry="20" fill="#fde047" stroke="#2c1a10" stroke-width="4"/>
      <circle cx="36" cy="54" r="5" fill="#f59e0b"/>
      <circle cx="62" cy="50" r="6" fill="#f59e0b"/>
      <circle cx="52" cy="64" r="4" fill="#f59e0b"/>
    </svg>`
  },
  {
    id: 'boxing_glove',
    name: 'Spring-Loaded Boxing Glove',
    category: 'object',
    tagline: 'Settles arguments on contact',
    sizeScale: 1.34,
    stemHeight: 174,
    attributes: { toughness: 10, danger: 9, excitement: 8, encouragement: 6, apology: -8 },
    flavorNotes: ['a heavy red leather boxing glove on a spring', 'a championship boxing glove'],
    svg: `<svg viewBox="0 0 100 130">
      <polyline points="42,118 58,108 42,98 58,88 50,78" fill="none" stroke="#64748b" stroke-width="6" stroke-linejoin="round"/>
      <rect x="34" y="62" width="32" height="18" rx="4" fill="#ffffff" stroke="#2c1a10" stroke-width="4"/>
      <path d="M24 52 C20 20, 78 16, 78 48 C78 62, 66 64, 30 64 Z" fill="#e63946" stroke="#2c1a10" stroke-width="4"/>
      <ellipse cx="28" cy="48" rx="10" ry="13" fill="#d62828" stroke="#2c1a10" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'cinderblock',
    name: 'artisanal Cinderblock',
    category: 'object',
    tagline: 'Brutalist architectural sincerity',
    sizeScale: 1.36,
    stemHeight: 158,
    attributes: { weight: 10, seriousness: 10, toughness: 9, utility: 6, beauty: -7 },
    flavorNotes: ['a raw 38-pound concrete cinderblock', 'a brutalist gray masonry block'],
    svg: `<svg viewBox="0 0 100 130">
      <rect x="14" y="42" width="72" height="54" rx="4" fill="#94a3b8" stroke="#2c1a10" stroke-width="4"/>
      <rect x="24" y="52" width="20" height="34" fill="#475569" stroke="#2c1a10" stroke-width="3.5"/>
      <rect x="56" y="52" width="20" height="34" fill="#475569" stroke="#2c1a10" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'saxophone',
    name: 'Smooth Jazz Saxophone',
    category: 'object',
    tagline: 'Careless Whisper sold separately',
    sizeScale: 1.40,
    stemHeight: 178,
    attributes: { romance: 9, celebration: 9, excitement: 7, beauty: 7, whimsy: 6 },
    flavorNotes: ['a gleaming brass alto saxophone', 'a smooth-jazz saxophone wedged in the stems'],
    svg: `<svg viewBox="0 0 100 130">
      <path d="M32 18 L46 24 L46 86 Q46 112 66 112 Q80 112 80 82" fill="none" stroke="#ffb703" stroke-width="12" stroke-linecap="round"/>
      <path d="M32 18 L46 24 L46 86 Q46 112 66 112 Q80 112 80 82" fill="none" stroke="#2c1a10" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="80" cy="78" rx="12" ry="8" fill="#fb8500" stroke="#2c1a10" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tin_foil_hat',
    name: 'Deluxe Tinfoil Hat',
    category: 'object',
    tagline: 'Blocks 5G & awkward small talk',
    sizeScale: 1.28,
    stemHeight: 162,
    attributes: { mystery: 9, weirdness: 10, caution: 8, confusion: 9, safety: 6 },
    flavorNotes: ['a hand-folded Reynolds Wrap tinfoil hat', 'a crinkly conspiracy-grade tinfoil hat'],
    svg: `<svg viewBox="0 0 100 130">
      <polygon points="50,12 50,36 16,84 84,84" fill="#cbd5e1" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
      <polyline points="32,62 50,52 64,68" fill="none" stroke="#64748b" stroke-width="3"/>
      <circle cx="50" cy="12" r="6" fill="#94a3b8" stroke="#2c1a10" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'Pinata',
    name: 'Festive Party Piñata',
    category: 'object',
    tagline: 'Full of butterscotch & secrets',
    sizeScale: 1.38,
    stemHeight: 174,
    attributes: { celebration: 10, happiness: 9, whimsy: 9, chaos: 7, friendliness: 7 },
    flavorNotes: ['a rainbow papier-mâché party donkey', 'a candy-stuffed birthday piñata'],
    svg: `<svg viewBox="0 0 100 130">
      <rect x="30" y="54" width="42" height="26" rx="6" fill="#ff5d8f" stroke="#2c1a10" stroke-width="4"/>
      <rect x="24" y="30" width="22" height="28" rx="6" fill="#00bbf9" stroke="#2c1a10" stroke-width="4"/>
      <polygon points="26,30 22,12 34,28" fill="#ffd166" stroke="#2c1a10" stroke-width="3.5"/>
      <polygon points="36,30 42,12 44,28" fill="#ffd166" stroke="#2c1a10" stroke-width="3.5"/>
      <rect x="32" y="78" width="10" height="24" fill="#ffd166" stroke="#2c1a10" stroke-width="3.5"/>
      <rect x="58" y="78" width="10" height="24" fill="#06d6a0" stroke="#2c1a10" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'parking_boot',
    name: 'Municipal Wheel Boot',
    category: 'object',
    tagline: 'You aren’t going anywhere, pal',
    sizeScale: 1.35,
    stemHeight: 164,
    attributes: { caution: 10, weight: 9, seriousness: 9, danger: 7, confusion: 7 },
    flavorNotes: ['a heavy yellow municipal parking enforcement boot', 'an actual steel car clamp'],
    svg: `<svg viewBox="0 0 100 130">
      <polygon points="18,86 82,86 72,44 28,44" fill="#ffb703" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="50" cy="66" r="14" fill="#e63946" stroke="#2c1a10" stroke-width="4"/>
      <rect x="44" y="24" width="12" height="24" fill="#64748b" stroke="#2c1a10" stroke-width="4"/>
    </svg>`
  }
];

export const ITEM_MAP = Object.fromEntries(INVENTORY_ITEMS.map(item => [item.id, item]));
