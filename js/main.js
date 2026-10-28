// ==========================================================================
// THE WORLD'S WORST FLORIST - Main Game Controller
// ==========================================================================

import { INVENTORY_ITEMS, ITEM_MAP, TRAIT_METADATA } from './data/items.js';
import {
  CUSTOMER_ARCHETYPES,
  HANDCRAFTED_SITUATIONS,
  generateProceduralSituation,
  renderCustomerSVG
} from './data/customers.js';
import { evaluateBouquet } from './engine/scoring.js';
import { sound } from './engine/audio.js';
import {
  loadStats,
  recordRoundResult,
  resetStats,
  updateFloristNametag,
  loadLeaderboard,
  syncPlayerToLeaderboard,
  fetchGlobalLeaderboard,
  lookupFriendByNametag,
  calculateFloristRating,
  launchConfetti
} from './engine/storage.js';

const MAX_BOUQUET_ITEMS = 8;

const state = {
  bouquet: [], // array of { uid, itemId, jitterAngle, jitterY }
  currentSituation: null,
  currentCustomer: null,
  usedSituationIndices: new Set(),
  activeFilter: 'all',
  showHints: true,
  wrapStyle: 'kraft',
  stats: loadStats(),
  comedyTimer: null,
  uidCounter: 1,
  openedStatsFromResult: false
};

// DOM References
const dom = {
  hudNametag: document.getElementById('hud-nametag'),
  btnNametagQuick: document.getElementById('btn-nametag-quick'),
  hudServed: document.getElementById('hud-served'),
  hudStreak: document.getElementById('hud-streak'),
  hudBest: document.getElementById('hud-best'),
  btnHome: document.getElementById('btn-home'),
  btnStats: document.getElementById('btn-stats'),
  btnMusic: document.getElementById('btn-music'),
  labelMusic: document.getElementById('label-music'),
  btnSfx: document.getElementById('btn-sfx'),
  labelSfx: document.getElementById('label-sfx'),

  customerAvatarWrap: document.getElementById('customer-avatar-wrap'),
  customerAvatar: document.getElementById('customer-avatar'),
  reactionBadge: document.getElementById('reaction-badge'),
  customerName: document.getElementById('customer-name'),
  customerTitle: document.getElementById('customer-title'),
  requestText: document.getElementById('request-text'),
  vibeTags: document.getElementById('vibe-tags'),
  btnToggleHints: document.getElementById('btn-toggle-hints'),
  eventTicker: document.getElementById('event-ticker'),
  tickerText: document.getElementById('ticker-text'),

  bouquetCount: document.getElementById('bouquet-count'),
  bouquetMax: document.getElementById('bouquet-max'),
  bouquetDropzone: document.getElementById('bouquet-dropzone'),
  dropzoneHint: document.getElementById('dropzone-hint'),
  bouquetStage: document.getElementById('bouquet-stage'),
  bouquetItemsLayer: document.getElementById('bouquet-items-layer'),
  fxLayer: document.getElementById('fx-layer'),
  selectedManifest: document.getElementById('selected-manifest'),

  btnClear: document.getElementById('btn-clear'),
  btnSurprise: document.getElementById('btn-surprise'),
  btnSubmit: document.getElementById('btn-submit'),
  inventoryGrid: document.getElementById('inventory-grid'),
  tabCountAll: document.getElementById('tab-count-all'),
  tabCountFlower: document.getElementById('tab-count-flower'),
  tabCountObject: document.getElementById('tab-count-object'),

  titleModal: document.getElementById('title-modal'),
  titleHeroArt: document.getElementById('title-hero-art'),
  titleNametagInput: document.getElementById('title-nametag-input'),
  btnStartGame: document.getElementById('btn-start-game'),

  resultModal: document.getElementById('result-modal'),
  resultRankBanner: document.getElementById('result-rank-banner'),
  resultScoreNum: document.getElementById('result-score-num'),
  resultMiniAvatar: document.getElementById('result-mini-avatar'),
  resultReactionTag: document.getElementById('result-reaction-tag'),
  resultCustomerQuote: document.getElementById('result-customer-quote'),
  resultNarrative: document.getElementById('result-narrative'),
  resultVibeBreakdown: document.getElementById('result-vibe-breakdown'),
  resultNametagDisplay: document.getElementById('result-nametag-display'),
  btnResultOpenBoard: document.getElementById('btn-result-open-board'),
  btnAdmire: document.getElementById('btn-admire'),
  btnNextCustomer: document.getElementById('btn-next-customer'),

  statsModal: document.getElementById('stats-modal'),
  btnCloseStats: document.getElementById('btn-close-stats'),
  btnDoneStats: document.getElementById('btn-done-stats'),
  btnResetStats: document.getElementById('btn-reset-stats'),
  ledgerNametagInput: document.getElementById('ledger-nametag-input'),
  btnSaveNametag: document.getElementById('btn-save-nametag'),
  leaderboardTbody: document.getElementById('leaderboard-tbody'),
  inputFriendSearch: document.getElementById('input-friend-search'),
  btnSearchFriend: document.getElementById('btn-search-friend'),
  btnClearSearch: document.getElementById('btn-clear-search'),
  rivalStatusMsg: document.getElementById('rival-status-msg'),

  statServed: document.getElementById('stat-served'),
  statBest: document.getElementById('stat-best'),
  statAvg: document.getElementById('stat-avg'),
  statHighestAvg: document.getElementById('stat-highest-avg'),
  statPerfect: document.getElementById('stat-perfect'),
  statStreak: document.getElementById('stat-streak'),
  bestBouquetDesc: document.getElementById('best-bouquet-desc'),

  confettiCanvas: document.getElementById('confetti-canvas')
};

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------
function init() {
  dom.bouquetMax.textContent = MAX_BOUQUET_ITEMS;

  // Dynamic inventory tab counts
  const flowerCount = INVENTORY_ITEMS.filter(i => i.category === 'flower').length;
  const objectCount = INVENTORY_ITEMS.filter(i => i.category === 'object').length;
  if (dom.tabCountAll) dom.tabCountAll.textContent = `All Stock (${INVENTORY_ITEMS.length})`;
  if (dom.tabCountFlower) dom.tabCountFlower.textContent = `🌸 Flowers (${flowerCount})`;
  if (dom.tabCountObject) dom.tabCountObject.textContent = `⚠️ Questionable (${objectCount})`;

  if (dom.titleNametagInput) {
    dom.titleNametagInput.value = state.stats.floristNametag || 'Apprentice Florist';
  }

  renderTitleHeroArt();
  updateHud();
  renderInventory();
  bindEvents();
  spawnNextCustomer(false);
  startRandomComedyScheduler();
}

function renderTitleHeroArt() {
  const rose = ITEM_MAP['rose'].svg;
  const chainsaw = ITEM_MAP['chainsaw'].svg;
  const duck = ITEM_MAP['rubber_duck'].svg;
  dom.titleHeroArt.innerHTML = `
    <div style="position:relative; width:170px; height:140px; display:flex; align-items:center; justify-content:center;">
      <div style="width:92px; height:92px; transform:rotate(-26deg) translateX(-26px);">${rose}</div>
      <div style="width:110px; height:110px; position:absolute; transform:rotate(12deg) translateY(-6px);">${chainsaw}</div>
      <div style="width:86px; height:86px; transform:rotate(24deg) translateX(26px);">${duck}</div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Customer & Situation Spawning
// ---------------------------------------------------------------------------
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCustomerProfile() {
  const arch = pickRandom(CUSTOMER_ARCHETYPES);
  const hairColors = ['#2c1a10', '#7f4f24', '#d62828', '#f77f00', '#6c757d', '#4cc9f0'];
  return {
    name: pickRandom(arch.names),
    title: pickRandom(arch.titles),
    skin: pickRandom(arch.skinColors),
    shirt: pickRandom(arch.shirtColors),
    hairStyle: arch.hairStyle,
    hairColor: pickRandom(hairColors),
    glasses: Math.random() < 0.35
  };
}

function pickNextSituation() {
  if (state.usedSituationIndices.size >= HANDCRAFTED_SITUATIONS.length) {
    state.usedSituationIndices.clear();
  }

  if (Math.random() < 0.90) {
    const available = [];
    for (let i = 0; i < HANDCRAFTED_SITUATIONS.length; i++) {
      if (!state.usedSituationIndices.has(i)) available.push(i);
    }
    const chosenIdx = pickRandom(available);
    state.usedSituationIndices.add(chosenIdx);
    return HANDCRAFTED_SITUATIONS[chosenIdx];
  } else {
    return generateProceduralSituation();
  }
}

function spawnNextCustomer(playBell = true) {
  state.bouquet = [];
  state.currentCustomer = generateCustomerProfile();
  state.currentSituation = pickNextSituation();

  if (playBell) {
    sound.playShopBell();
  }

  // Update Customer UI
  dom.reactionBadge.classList.add('hidden');
  dom.customerName.textContent = state.currentCustomer.name;
  dom.customerTitle.textContent = `• ${state.currentCustomer.title}`;
  dom.requestText.textContent = `“${state.currentSituation.text}”`;

  dom.customerAvatar.innerHTML = renderCustomerSVG(state.currentCustomer, 'neutral');
  dom.customerAvatarWrap.classList.remove('customer-enter');
  void dom.customerAvatarWrap.offsetWidth; // trigger reflow
  dom.customerAvatarWrap.classList.add('customer-enter');

  renderVibeClues();
  renderBouquetWorkbench();
  setTickerMessage(`New customer! Build an arrangement for ${state.currentCustomer.name}.`);
}

function renderVibeClues() {
  dom.vibeTags.innerHTML = '';
  if (!state.showHints) {
    dom.vibeTags.innerHTML = `<span style="font-size:0.76rem; color:#6e5241; font-style:italic;">Intuition clues hidden — trust your chaotic heart!</span>`;
    return;
  }

  const currentTotals = {};
  for (const entry of state.bouquet) {
    const item = ITEM_MAP[entry.itemId];
    if (!item) continue;
    for (const [t, val] of Object.entries(item.attributes)) {
      currentTotals[t] = (currentTotals[t] || 0) + val;
    }
  }

  for (const trait of state.currentSituation.desired) {
    const meta = TRAIT_METADATA[trait] || { label: trait, icon: '✨', clue: trait };
    const matched = (currentTotals[trait] || 0) >= 8;
    const tag = document.createElement('span');
    tag.className = `vibe-tag ${matched ? 'matched' : ''}`;
    tag.title = meta.clue;
    tag.innerHTML = `${meta.icon} ${meta.label} ${matched ? '✓' : ''}`;
    dom.vibeTags.appendChild(tag);
  }
}

// ---------------------------------------------------------------------------
// Bouquet Assembly & Fan Arrangement Math
// ---------------------------------------------------------------------------
function addItemToBouquet(itemId) {
  if (state.bouquet.length >= MAX_BOUQUET_ITEMS) {
    spawnFloatingPop('Bouquet Full! (Max 8)', 50, 40, '#ef476f');
    sound.playRemove();
    return;
  }

  const item = ITEM_MAP[itemId];
  if (!item) return;

  const entry = {
    uid: state.uidCounter++,
    itemId: item.id,
    jitterAngle: (Math.random() - 0.5) * 14,
    jitterY: (Math.random() - 0.5) * 16
  };

  state.bouquet.push(entry);

  // Audio feedback
  if (item.category === 'flower') {
    sound.playPop(380 + state.bouquet.length * 35);
  } else {
    sound.playObjectClang(item.id);
  }

  // Wobble the bouquet stage
  dom.bouquetStage.classList.remove('wobble');
  void dom.bouquetStage.offsetWidth;
  dom.bouquetStage.classList.add('wobble');

  // Check if this item directly boosts one of the customer's desired traits
  const boostedTraits = state.currentSituation.desired.filter(t => (item.attributes[t] || 0) >= 5);
  if (boostedTraits.length > 0) {
    const tMeta = TRAIT_METADATA[boostedTraits[0]];
    spawnFloatingPop(`${tMeta.icon} +${tMeta.label}!`, 50 + (Math.random() - 0.5) * 28, 42);
    dom.customerAvatar.innerHTML = renderCustomerSVG(state.currentCustomer, 'impressed');
  } else {
    spawnFloatingPop(`Added ${item.name}!`, 50 + (Math.random() - 0.5) * 24, 48);
  }

  renderBouquetWorkbench();
  renderVibeClues();

  // Trigger an immediate micro-comedy reaction when adding a wild object
  if (item.category === 'object' && Math.random() < 0.48) {
    triggerSpecificItemGag(entry.uid, item.id);
  }
}

function removeItemFromBouquet(uid) {
  const idx = state.bouquet.findIndex(e => e.uid === uid);
  if (idx === -1) return;
  const removed = ITEM_MAP[state.bouquet[idx].itemId];
  state.bouquet.splice(idx, 1);
  sound.playRemove();
  if (removed) {
    setTickerMessage(`Removed ${removed.name} from the arrangement.`);
  }
  renderBouquetWorkbench();
  renderVibeClues();
}

function renderBouquetWorkbench() {
  const count = state.bouquet.length;
  dom.bouquetCount.textContent = count;
  dom.btnSubmit.disabled = count === 0;
  dom.dropzoneHint.classList.toggle('hidden', count > 0);

  dom.bouquetItemsLayer.innerHTML = '';

  state.bouquet.forEach((entry, index) => {
    const item = ITEM_MAP[entry.itemId];
    if (!item) return;

    const progress = count === 1 ? 0 : (index / (count - 1)) * 2 - 1;
    const baseAngle = progress * Math.min(44, count * 7.5) + entry.jitterAngle;
    const spreadX = progress * Math.min(88, count * 14);
    const archY = Math.abs(progress) * 18 - entry.jitterY;

    const el = document.createElement('div');
    el.className = 'bouquet-placed-item';
    el.dataset.uid = entry.uid;
    el.dataset.itemId = item.id;
    el.title = `Click to remove ${item.name}`;

    const baseWidth = Math.round(92 * item.sizeScale);
    const baseHeight = Math.round(item.stemHeight * item.sizeScale * 0.72);

    el.style.width = `${baseWidth}px`;
    el.style.height = `${baseHeight}px`;
    el.style.zIndex = item.category === 'object' ? 6 + index : 2 + index;
    el.style.transform = `translate(calc(-50% + ${spreadX}px), ${archY}px) rotate(${baseAngle}deg)`;
    el.innerHTML = item.svg;

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      removeItemFromBouquet(entry.uid);
    });

    dom.bouquetItemsLayer.appendChild(el);
  });

  dom.selectedManifest.innerHTML = '';
  state.bouquet.forEach((entry) => {
    const item = ITEM_MAP[entry.itemId];
    const chip = document.createElement('button');
    chip.className = 'manifest-chip';
    chip.title = `Remove ${item.name}`;
    chip.innerHTML = `<span>${item.name}</span> <span class="chip-remove">✕</span>`;
    chip.addEventListener('click', () => removeItemFromBouquet(entry.uid));
    dom.selectedManifest.appendChild(chip);
  });
}

// ---------------------------------------------------------------------------
// Inventory Shelf Rendering & Drag-and-Drop / Click-to-Add
// ---------------------------------------------------------------------------
function renderInventory() {
  dom.inventoryGrid.innerHTML = '';

  const filtered = INVENTORY_ITEMS.filter(item => {
    if (state.activeFilter === 'all') return true;
    return item.category === state.activeFilter;
  });

  for (const item of filtered) {
    const card = document.createElement('div');
    card.className = `inv-card category-${item.category}`;
    card.draggable = true;
    card.dataset.itemId = item.id;

    card.innerHTML = `
      <span class="inv-card-badge">${item.category === 'flower' ? '🌸' : '⚠️'}</span>
      <div class="inv-art">${item.svg}</div>
      <div class="inv-name">${item.name}</div>
      <div class="inv-tagline">${item.tagline}</div>
    `;

    card.addEventListener('click', () => {
      addItemToBouquet(item.id);
    });

    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', item.id);
      e.dataTransfer.effectAllowed = 'copy';
    });

    dom.inventoryGrid.appendChild(card);
  }
}

// ---------------------------------------------------------------------------
// Random Visual Comedy Events
// ---------------------------------------------------------------------------
const COMEDY_EVENTS = [
  {
    itemId: 'rubber_duck',
    animClass: 'ev-escape',
    message: '🦆 QUACK! The rubber duck briefly attempted to escape the bouquet!'
  },
  {
    itemId: 'rubber_chicken',
    animClass: 'ev-escape',
    message: '🐔 HONK! The rubber chicken let out a 110-decibel shriek!'
  },
  {
    itemId: 'chainsaw',
    animClass: 'ev-vibrate',
    message: '🪚 BRRRRR! The chainsaw idled aggressively and rattled the petals!'
  },
  {
    itemId: 'leaf_blower',
    animClass: 'ev-vibrate',
    message: '💨 WHOOSH! The leaf blower briefly switched itself on!'
  },
  {
    itemId: 'gnome',
    animClass: 'ev-spin',
    message: '🧙 The garden gnome tilted over to stare directly at the customer.'
  },
  {
    itemId: 'flamingo',
    animClass: 'ev-spin',
    message: '🦩 The plastic lawn flamingo majestically rotated 360 degrees!'
  },
  {
    itemId: 'bowling_ball',
    animClass: 'ev-squish',
    message: '🎳 CRUNCH! The 16-lb bowling ball settled and squished the nearby stems!'
  },
  {
    itemId: 'cinderblock',
    animClass: 'ev-squish',
    message: '🧱 THUD! The 38-lb cinderblock compressed the wrapping cone!'
  },
  {
    itemId: 'toaster',
    animClass: 'ev-escape',
    message: '🍞 DING! The toaster just launched a warm slice of rye bread!'
  },
  {
    itemId: 'pool_noodle',
    animClass: 'ev-spin',
    message: '🌊 THWACK! The foam pool noodle bent dramatically across the counter!'
  },
  {
    itemId: 'cactus',
    animClass: 'ev-vibrate',
    message: '🌵 OUCH! The saguaro cactus poked a neighboring decoration!'
  },
  {
    itemId: 'flytrap',
    animClass: 'ev-escape',
    message: '🪴 SNAP! The Venus flytrap just lunged at a passing housefly!'
  },
  {
    itemId: 'boxing_glove',
    animClass: 'ev-escape',
    message: '🥊 BOING! The spring-loaded boxing glove extended six inches!'
  },
  {
    itemId: 'saxophone',
    animClass: 'ev-spin',
    message: '🎷 A mysterious smooth-jazz riff echoed from the alto saxophone!'
  },
  {
    itemId: 'ouija_planchette',
    animClass: 'ev-vibrate',
    message: '🔮 The haunted crystal ball hummed with eerie ultraviolet energy!'
  }
];

function triggerSpecificItemGag(uid, itemId) {
  const ev = COMEDY_EVENTS.find(c => c.itemId === itemId);
  if (!ev) return;

  const placedEl = dom.bouquetItemsLayer.querySelector(`[data-uid="${uid}"]`);
  if (placedEl) {
    placedEl.classList.add(ev.animClass);
    setTimeout(() => placedEl.classList.remove(ev.animClass), 950);
  }
  setTickerMessage(ev.message, true);
}

function startRandomComedyScheduler() {
  if (state.comedyTimer) clearInterval(state.comedyTimer);
  state.comedyTimer = setInterval(() => {
    if (state.bouquet.length === 0) return;
    if (!dom.resultModal.classList.contains('hidden')) return;

    const candidates = state.bouquet.filter(b =>
      COMEDY_EVENTS.some(ev => ev.itemId === b.itemId)
    );
    if (candidates.length === 0) return;

    const chosen = pickRandom(candidates);
    triggerSpecificItemGag(chosen.uid, chosen.itemId);
    sound.playObjectClang(chosen.itemId);
  }, 6500);
}

function setTickerMessage(msg, flash = false) {
  dom.tickerText.textContent = msg;
  if (flash) {
    dom.eventTicker.classList.remove('event-flash');
    void dom.eventTicker.offsetWidth;
    dom.eventTicker.classList.add('event-flash');
  }
}

function spawnFloatingPop(text, leftPct = 50, topPct = 45, bg = '#ffffff') {
  const pop = document.createElement('div');
  pop.className = 'floating-pop';
  pop.style.left = `${leftPct}%`;
  pop.style.top = `${topPct}%`;
  if (bg !== '#ffffff') {
    pop.style.background = bg;
    pop.style.color = '#fff';
  }
  pop.textContent = text;
  dom.fxLayer.appendChild(pop);
  setTimeout(() => pop.remove(), 1150);
}

// ---------------------------------------------------------------------------
// Bouquet Submission & Evaluation Flow
// ---------------------------------------------------------------------------
function submitBouquet() {
  if (state.bouquet.length === 0) return;

  const itemIds = state.bouquet.map(b => b.itemId);
  const itemNames = itemIds.map(id => ITEM_MAP[id]?.name).filter(Boolean);

  const result = evaluateBouquet(
    itemIds,
    state.currentSituation,
    state.currentCustomer
  );

  // Update Customer live reaction on the main stage too
  dom.customerAvatar.innerHTML = renderCustomerSVG(state.currentCustomer, result.reaction);
  dom.reactionBadge.textContent = result.badgeText;
  dom.reactionBadge.classList.remove('hidden');

  // Record in localStorage & sync to Global High Score Board under the player's Florist Nametag
  state.stats = recordRoundResult(
    state.stats,
    result.score,
    result.rank,
    itemNames,
    state.currentCustomer.name
  );
  updateHud();

  // Populate Result Modal
  dom.resultRankBanner.textContent = result.rank;
  dom.resultRankBanner.style.background = result.rankColor;
  dom.resultScoreNum.textContent = result.score;
  dom.resultMiniAvatar.innerHTML = renderCustomerSVG(state.currentCustomer, result.reaction);
  dom.resultReactionTag.textContent = `${result.reaction.toUpperCase()}!`;
  dom.resultCustomerQuote.textContent = result.quote;

  dom.resultNarrative.innerHTML = result.paragraphs.map(p => `<p>${p}</p>`).join('');

  dom.resultVibeBreakdown.innerHTML = result.traitResults.map(tr => {
    const statusLabel = tr.status === 'good' ? 'Nailed It!' : tr.status === 'warn' ? 'Partial Match' : 'Missed Vibe';
    return `<span class="breakdown-pill ${tr.status}">${tr.icon} ${tr.label}: ${statusLabel}</span>`;
  }).join('');

  if (dom.resultNametagDisplay) {
    dom.resultNametagDisplay.textContent = state.stats.floristNametag || 'Apprentice Florist';
  }

  dom.resultModal.classList.remove('hidden');
  sound.playResultFanfare(result.score);

  if (result.score >= 70) {
    launchConfetti(dom.confettiCanvas, result.score >= 86 ? 110 : 60);
  }
}

// ---------------------------------------------------------------------------
// HUD & Global High Score Board / Statistics Modal
// ---------------------------------------------------------------------------
function updateHud() {
  if (dom.hudNametag) {
    dom.hudNametag.textContent = state.stats.floristNametag || 'Apprentice Florist';
  }
  dom.hudServed.textContent = state.stats.customersServed;
  dom.hudStreak.textContent = `${state.stats.currentStreak} 🔥`;
  dom.hudBest.textContent = state.stats.bestScore;
}

function renderLeaderboardRows(rows) {
  if (!dom.leaderboardTbody) return;
  dom.leaderboardTbody.innerHTML = '';

  rows.forEach((entry, idx) => {
    const tr = document.createElement('tr');
    if (entry.isPlayer) tr.className = 'player-row';

    const rankNum = entry.rank || idx + 1;
    const rankMedal = rankNum === 1 ? '🥇 1' : rankNum === 2 ? '🥈 2' : rankNum === 3 ? '🥉 3' : `#${rankNum}`;
    const rating = entry.rating || calculateFloristRating(entry);
    tr.innerHTML = `
      <td><strong>${rankMedal}</strong></td>
      <td>
        <span class="lb-nametag-badge">🏷️ ${escapeHtml(entry.nametag)}${entry.isPlayer ? ' (YOU)' : ''}</span>
        <span class="lb-sub-badge">${escapeHtml(entry.badge || '')}</span>
      </td>
      <td><span class="lb-score-pill">${entry.score} PTS</span></td>
      <td><strong>${entry.avgScore || entry.score}</strong></td>
      <td>
        <div class="lb-runs-badge">
          <span class="runs-num">${entry.served || 1}</span>
          <span class="runs-label">SERVED</span>
        </div>
      </td>
      <td><strong style="color:var(--accent-purple);font-size:1.05rem;">${rating}</strong></td>
      <td style="font-size:0.75rem;color:#382215;line-height:1.25;">${escapeHtml(entry.signatureBouquet || '')}</td>
    `;
    dom.leaderboardTbody.appendChild(tr);
  });
}

async function renderLeaderboardTable() {
  if (!dom.leaderboardTbody) return;
  // Render cached/local immediately so there is zero flicker
  const immediateBoard = syncPlayerToLeaderboard(state.stats);
  renderLeaderboardRows(immediateBoard);

  // Then fetch live SQLite global rankings
  const { rows } = await fetchGlobalLeaderboard(state.stats);
  renderLeaderboardRows(rows);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function openStatsModal() {
  const s = state.stats;
  const avg = s.customersServed > 0 ? Math.round(s.lifetimeScore / s.customersServed) : 0;

  if (dom.btnDoneStats) {
    dom.btnDoneStats.textContent = state.openedStatsFromResult ? 'Back to Scorecard' : 'Back to Shop';
  }

  if (dom.ledgerNametagInput) {
    dom.ledgerNametagInput.value = s.floristNametag || 'Apprentice Florist';
  }
  if (dom.rivalStatusMsg) {
    dom.rivalStatusMsg.classList.add('hidden');
  }

  dom.statServed.textContent = s.customersServed;
  dom.statBest.textContent = s.bestScore;
  dom.statAvg.textContent = avg;
  dom.statHighestAvg.textContent = s.highestAvg;
  dom.statPerfect.textContent = s.perfectCount;
  dom.statStreak.textContent = s.longestStreak;
  dom.bestBouquetDesc.textContent = s.bestBouquetDesc;

  renderLeaderboardTable();
  dom.statsModal.classList.remove('hidden');
}

// ---------------------------------------------------------------------------
// Event Listeners
// ---------------------------------------------------------------------------
function bindEvents() {
  // Title Screen
  dom.btnStartGame.addEventListener('click', () => {
    if (dom.titleNametagInput && dom.titleNametagInput.value.trim()) {
      state.stats = updateFloristNametag(state.stats, dom.titleNametagInput.value);
      updateHud();
    }
    sound.initContext();
    sound.playShopBell();
    dom.titleModal.classList.add('hidden');
  });

  dom.btnHome.addEventListener('click', () => {
    if (dom.titleNametagInput) {
      dom.titleNametagInput.value = state.stats.floristNametag || 'Apprentice Florist';
    }
    dom.titleModal.classList.remove('hidden');
  });

  // Quick Nametag button in HUD
  if (dom.btnNametagQuick) {
    dom.btnNametagQuick.addEventListener('click', () => {
      openStatsModal();
      setTimeout(() => dom.ledgerNametagInput?.focus(), 60);
    });
  }

  // Save Nametag in High Score Modal
  if (dom.btnSaveNametag) {
    dom.btnSaveNametag.addEventListener('click', () => {
      const val = dom.ledgerNametagInput.value;
      state.stats = updateFloristNametag(state.stats, val);
      updateHud();
      renderLeaderboardTable();
      sound.playPop(580);
      showRivalStatus(`✅ Florist Nametag updated to "${state.stats.floristNametag}"!`);
    });
  }

  // Look Up Friend by Florist Nametag on Global SQLite Board
  async function handleFriendSearch() {
    const query = dom.inputFriendSearch?.value || '';
    try {
      const matches = await lookupFriendByNametag(query, state.stats);
      if (matches.length === 0) {
        sound.playRemove();
        showRivalStatus(`🔍 No florist found matching "${query.trim()}".`, true);
        return;
      }
      renderLeaderboardRows(matches);
      dom.btnClearSearch?.classList.remove('hidden');
      sound.playPop(620);
      const top = matches[0];
      showRivalStatus(
        `🌺 Found ${matches.length} florist(s)! "${top.nametag}" is Global Rank #${top.rank} (${top.score} PTS Best, ${top.avgScore} Avg, ${top.served} Served).`
      );
    } catch (err) {
      sound.playRemove();
      showRivalStatus(`⚠️ ${err.message}`, true);
    }
  }

  if (dom.btnSearchFriend) {
    dom.btnSearchFriend.addEventListener('click', handleFriendSearch);
  }
  if (dom.inputFriendSearch) {
    dom.inputFriendSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleFriendSearch();
    });
  }
  if (dom.btnClearSearch) {
    dom.btnClearSearch.addEventListener('click', () => {
      if (dom.inputFriendSearch) dom.inputFriendSearch.value = '';
      dom.btnClearSearch.classList.add('hidden');
      if (dom.rivalStatusMsg) dom.rivalStatusMsg.classList.add('hidden');
      renderLeaderboardTable();
    });
  }

  // Open High Score Board from Result Modal
  if (dom.btnResultOpenBoard) {
    dom.btnResultOpenBoard.addEventListener('click', () => {
      state.openedStatsFromResult = true;
      dom.resultModal.classList.add('hidden');
      openStatsModal();
    });
  }

  // Audio Toggles
  dom.btnSfx.addEventListener('click', () => {
    const on = sound.toggleSfx();
    dom.labelSfx.textContent = `SFX: ${on ? 'On' : 'Off'}`;
    dom.btnSfx.firstChild.textContent = on ? '🔊 ' : '🔇 ';
  });

  dom.btnMusic.addEventListener('click', () => {
    const on = sound.toggleMusic();
    dom.labelMusic.textContent = `Music: ${on ? 'On' : 'Off'}`;
  });

  // Hints toggle
  dom.btnToggleHints.addEventListener('click', () => {
    state.showHints = !state.showHints;
    dom.btnToggleHints.textContent = state.showHints ? 'Hide Clues' : 'Show Clues';
    renderVibeClues();
  });

  // Inventory category filter tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilter = btn.dataset.filter;
      renderInventory();
    });
  });

  // Wrapping Paper Swatches
  document.querySelectorAll('.wrap-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.wrap-swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      state.wrapStyle = swatch.dataset.wrap;
      dom.bouquetStage.dataset.wrap = state.wrapStyle;
      sound.playPop(500);
    });
  });

  // Dropzone Drag-and-Drop
  dom.bouquetDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    dom.bouquetDropzone.classList.add('drag-over');
  });

  dom.bouquetDropzone.addEventListener('dragleave', () => {
    dom.bouquetDropzone.classList.remove('drag-over');
  });

  dom.bouquetDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dom.bouquetDropzone.classList.remove('drag-over');
    const itemId = e.dataTransfer.getData('text/plain');
    if (itemId) {
      addItemToBouquet(itemId);
    }
  });

  // Workbench Controls
  dom.btnClear.addEventListener('click', () => {
    if (state.bouquet.length === 0) return;
    state.bouquet = [];
    sound.playRemove();
    renderBouquetWorkbench();
    renderVibeClues();
    setTickerMessage('Cleared the workbench. Ready for a fresh catastrophe!');
  });

  // "Panic Grab" button: adds 5 chaotic items (flowers + questionable objects)
  dom.btnSurprise.addEventListener('click', () => {
    state.bouquet = [];
    const flowers = INVENTORY_ITEMS.filter(i => i.category === 'flower');
    const objects = INVENTORY_ITEMS.filter(i => i.category === 'object');

    addItemToBouquet(pickRandom(flowers).id);
    addItemToBouquet(pickRandom(flowers).id);
    addItemToBouquet(pickRandom(objects).id);
    addItemToBouquet(pickRandom(objects).id);
    addItemToBouquet(pickRandom(objects).id);

    setTickerMessage('🎲 PANIC GRAB! You swept five random items off the shelves!', true);
  });

  dom.btnSubmit.addEventListener('click', submitBouquet);

  // Result Modal Actions
  dom.btnAdmire.addEventListener('click', () => {
    dom.resultModal.classList.add('hidden');
    setTickerMessage('Admiring your creation! Click “Present Bouquet” or “Next Customer” when ready.');
  });

  dom.btnNextCustomer.addEventListener('click', () => {
    dom.resultModal.classList.add('hidden');
    spawnNextCustomer(true);
  });

  function closeStatsModal() {
    dom.statsModal.classList.add('hidden');
    if (state.openedStatsFromResult) {
      state.openedStatsFromResult = false;
      dom.resultModal.classList.remove('hidden');
    }
  }

  // Statistics Modal Actions
  dom.btnStats.addEventListener('click', () => {
    state.openedStatsFromResult = false;
    openStatsModal();
  });
  dom.btnCloseStats.addEventListener('click', closeStatsModal);
  dom.btnDoneStats.addEventListener('click', closeStatsModal);

  dom.btnResetStats.addEventListener('click', () => {
    state.stats = resetStats();
    updateHud();
    openStatsModal();
  });

  // Keyboard shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!dom.statsModal.classList.contains('hidden')) {
        closeStatsModal();
      } else if (!dom.resultModal.classList.contains('hidden')) {
        dom.resultModal.classList.add('hidden');
      }
    }
  });
}

function showRivalStatus(msg, isError = false) {
  if (!dom.rivalStatusMsg) return;
  dom.rivalStatusMsg.textContent = msg;
  dom.rivalStatusMsg.style.color = isError ? '#ef476f' : '#1b4332';
  dom.rivalStatusMsg.classList.remove('hidden');
}

init();
