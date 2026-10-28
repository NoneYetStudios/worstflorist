// ==========================================================================
// THE WORLD'S WORST FLORIST - Scoring, Reactions, & Comedy Narrative Engine
// ==========================================================================

import { TRAIT_METADATA, ITEM_MAP } from '../data/items.js';

export const RANKS = [
  {
    min: 86,
    title: 'Exactly What I Needed',
    color: '#2dc653',
    reactions: ['delighted', 'emotional'],
    badgeText: '🤩 EXACTLY WHAT I NEEDED!'
  },
  {
    min: 70,
    title: 'Excellent Choice',
    color: '#06d6a0',
    reactions: ['impressed', 'delighted'],
    badgeText: '😎 EXCELLENT CHOICE!'
  },
  {
    min: 50,
    title: 'Surprisingly Appropriate',
    color: '#ffd166',
    reactions: ['impressed', 'speechless'],
    badgeText: '🤔 SURPRISINGLY APPROPRIATE'
  },
  {
    min: 32,
    title: 'Questionable',
    color: '#ff9f1c',
    reactions: ['confused', 'speechless'],
    badgeText: '🤨 DEEPLY QUESTIONABLE'
  },
  {
    min: 0,
    title: 'Catastrophic',
    color: '#ef476f',
    reactions: ['terrified', 'confused'],
    badgeText: '😱 CATASTROPHIC!'
  }
];

// Special synergy bonuses for ridiculous combos
const COMBO_BONUSES = [
  {
    name: 'OSHA Violation Special',
    check: (ids) => ids.includes('chainsaw') && (ids.includes('cone') || ids.includes('safety_vest') || ids.includes('helmet')),
    bonus: 8,
    note: 'Combining a live chainsaw with safety gear created a paradoxical aura of responsible recklessness.'
  },
  {
    name: 'Suburban Dominance',
    check: (ids) => ids.includes('flamingo') && ids.includes('gnome'),
    bonus: 7,
    note: 'The lawn flamingo and garden gnome formed an unstoppable HOA intimidation alliance.'
  },
  {
    name: 'Bath-Time Pool Party',
    check: (ids) => ids.includes('rubber_duck') && ids.includes('pool_noodle'),
    bonus: 7,
    note: 'Pairing the rubber duck with a pool noodle unlocked supreme aquatic whimsy.'
  },
  {
    name: 'Breakfast of Champions',
    check: (ids) => ids.includes('toaster') && ids.includes('trophy'),
    bonus: 7,
    note: 'Nothing says “you survived” quite like a trophy wedged next to a warm toaster.'
  },
  {
    name: 'Beauty and the Brutality',
    check: (ids) => (ids.includes('rose') || ids.includes('peony') || ids.includes('black_rose')) && (ids.includes('chainsaw') || ids.includes('bowling_ball') || ids.includes('cactus') || ids.includes('cinderblock')),
    bonus: 6,
    note: 'The tender velvet bloom juxtaposed against sheer physical danger struck an unforgettable chord.'
  },
  {
    name: 'Smooth Jazz & Cheddar',
    check: (ids) => ids.includes('saxophone') && ids.includes('cheese_wheel'),
    bonus: 8,
    note: 'Pairing a brass saxophone with a 12-pound wheel of aged cheddar unlocked peak supper-club romance.'
  },
  {
    name: 'Tinfoil Paranormal',
    check: (ids) => ids.includes('tin_foil_hat') && (ids.includes('ouija_planchette') || ids.includes('lava_lamp')),
    bonus: 8,
    note: 'The tinfoil hat and paranormal orb harmonized on a frequency unknown to modern science.'
  },
  {
    name: 'Maximum Decibel Slapstick',
    check: (ids) => ids.includes('megaphone') && ids.includes('rubber_chicken'),
    bonus: 8,
    note: 'Holding a screaming rubber chicken up to a stadium bullhorn guaranteed the message was heard three counties away.'
  },
  {
    name: 'Knockout Apology',
    check: (ids) => ids.includes('teddy_bear') && ids.includes('boxing_glove'),
    bonus: 7,
    note: 'The one-eyed apology bear and spring-loaded boxing glove sent a thrillingly mixed message.'
  }
];

export function evaluateBouquet(itemIds, customerSituation, customerProfile) {
  const items = itemIds.map(id => ITEM_MAP[id]).filter(Boolean);
  const desiredTraits = customerSituation.desired || [];

  // Aggregate attribute totals with gentle diminishing returns for duplicates
  const counts = {};
  const totals = {};

  for (const item of items) {
    counts[item.id] = (counts[item.id] || 0) + 1;
    const dupFactor = counts[item.id] === 1 ? 1.0 : counts[item.id] === 2 ? 0.65 : 0.3;

    for (const [trait, val] of Object.entries(item.attributes)) {
      totals[trait] = (totals[trait] || 0) + val * dupFactor;
    }
  }

  // Calculate how well each of the 3 desired traits is satisfied
  // Target for full satisfaction on a trait is ~11 points
  const TARGET_PER_TRAIT = 11;
  let traitScoreSum = 0;
  const traitResults = [];

  for (const trait of desiredTraits) {
    const raw = totals[trait] || 0;
    const ratio = Math.max(0, Math.min(1.22, raw / TARGET_PER_TRAIT));
    traitScoreSum += ratio;

    traitResults.push({
      trait,
      label: TRAIT_METADATA[trait]?.label || trait,
      icon: TRAIT_METADATA[trait]?.icon || '✨',
      raw: Math.round(raw),
      status: raw >= 9 ? 'good' : raw >= 4 ? 'warn' : 'bad'
    });
  }

  // Base score from matching desired traits (up to ~82 pts)
  let score = (traitScoreSum / Math.max(1, desiredTraits.length)) * 78;

  // Eclectic Mix Bonus: having at least 1 flower AND 1 questionable object
  const hasFlower = items.some(i => i.category === 'flower');
  const hasObject = items.some(i => i.category === 'object');
  const uniqueCount = new Set(itemIds).size;

  if (hasFlower && hasObject) {
    score += 10;
  } else if (hasObject) {
    score += 4;
  }

  if (uniqueCount >= 3) {
    score += 6;
  }

  // Check special combos
  const triggeredCombos = [];
  for (const combo of COMBO_BONUSES) {
    if (combo.check(itemIds)) {
      score += combo.bonus;
      triggeredCombos.push(combo);
    }
  }

  // Penalize if a desired trait was driven deeply negative (e.g., customer wanted Safety and got a Chainsaw without safety gear)
  for (const trait of desiredTraits) {
    if ((totals[trait] || 0) < 0) {
      score -= 14;
    }
  }

  const finalScore = Math.max(5, Math.min(100, Math.round(score)));

  // Determine Rank & Customer Facial Expression
  const rankObj = RANKS.find(r => finalScore >= r.min) || RANKS[RANKS.length - 1];

  // Pick specific reaction based on bouquet contents + rank
  let reaction = rankObj.reactions[0];
  if (finalScore >= 86 && (totals.romance >= 8 || totals.comfort >= 8 || totals.apology >= 8)) {
    reaction = 'emotional';
  } else if (finalScore < 40 && (totals.danger >= 10 || itemIds.includes('chainsaw'))) {
    reaction = 'terrified';
  } else if (finalScore >= 50 && finalScore < 70 && (totals.weirdness >= 10 || totals.confusion >= 10)) {
    reaction = 'speechless';
  }

  // Generate handcrafted humorous commentary & customer quote
  const { quote, paragraphs } = buildHumorousNarrative({
    items,
    itemIds,
    totals,
    traitResults,
    finalScore,
    rankObj,
    customerSituation,
    customerProfile,
    triggeredCombos
  });

  return {
    score: finalScore,
    rank: rankObj.title,
    rankColor: rankObj.color,
    badgeText: rankObj.badgeText,
    reaction,
    quote,
    paragraphs,
    traitResults,
    triggeredCombos
  };
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildHumorousNarrative({
  items,
  itemIds,
  totals,
  traitResults,
  finalScore,
  rankObj,
  customerSituation,
  customerProfile,
  triggeredCombos
}) {
  const name = customerProfile.name;
  const context = customerSituation.contextTag || 'this delicate situation';

  const flowers = items.filter(i => i.category === 'flower');
  const objects = items.filter(i => i.category === 'object');

  const firstFlower = flowers[0] || items[0];
  const firstObject = objects[0] || items[items.length - 1];
  const secondObject = objects[1] || items[Math.floor(items.length / 2)];

  // 1. Customer Direct Verdict Quote
  let quote = '';
  if (finalScore >= 86) {
    const perfectQuotes = [
      `“I walked in here worried about ${context}, and you handed me ${firstObject.flavorNotes[0]}. You are a visionary.”`,
      `“Nothing on earth could prepare someone for ${context} better than ${firstObject.name} taped to ${firstFlower.name}. It’s a masterpiece!”`,
      `“I’m actually tearing up. The way the ${firstObject.name.toLowerCase()} complements ${context} is pure poetry.”`,
      `“How did you know?! This is 100% the exact emotional frequency I needed today!”`
    ];
    quote = pick(perfectQuotes);
  } else if (finalScore >= 70) {
    const greatQuotes = [
      `“Honestly? Given the whole ${context} situation, ${firstObject.flavorNotes[0]} makes a disturbing amount of sense.”`,
      `“At first I questioned the ${firstObject.name.toLowerCase()}, but now I realize I couldn’t leave without it.”`,
      `“Bold. Unhinged. Surprisingly heartfelt. This is going straight on the mantlepiece.”`
    ];
    quote = pick(greatQuotes);
  } else if (finalScore >= 50) {
    const midQuotes = [
      `“Look, ${context} is already weird enough, so handing over ${firstObject.flavorNotes[0]} probably won’t make things worse.”`,
      `“I’m not sure what message the ${firstObject.name.toLowerCase()} sends, but it definitely sends it loudly.”`,
      `“I came in for flowers and I’m leaving with ${firstObject.flavorNotes[0]}. I respect your confidence.”`
    ];
    quote = pick(midQuotes);
  } else if (finalScore >= 32) {
    const questQuotes = [
      `“I asked for help with ${context} and you’re handing me ${firstObject.flavorNotes[0]}? Are you threatening me or comforting me?”`,
      `“I have seventeen questions about why there is a ${firstObject.name.toLowerCase()} in here, and I’m afraid of the answers.”`,
      `“This bouquet feels less like a gift and more like evidence in a municipal court case.”`
    ];
    quote = pick(questQuotes);
  } else {
    const catQuotes = [
      `“How does ${firstObject.flavorNotes[0]} help with ${context}?! Somebody call the florist licensing board!”`,
      `“I am both emotionally unprepared and physically endangered by this arrangement.”`,
      `“If I hand this to them after ${context}, they are going to change their phone number immediately.”`
    ];
    quote = pick(catQuotes);
  }

  // 2. Handcrafted Item-Specific & Combination Commentary Paragraphs
  const paragraphs = [];

  if (flowers.length > 0 && objects.length > 0) {
    const flowerNote = flowers[0].flavorNotes[0];
    const obj1Note = objects[0].flavorNotes[0];
    if (objects.length >= 2 && objects[1].id !== objects[0].id) {
      const obj2Note = objects[1].flavorNotes[0];
      paragraphs.push(
        `${name} was deeply moved by ${flowerNote}, mildly alarmed by ${obj1Note}, and utterly transfixed by ${obj2Note}.`
      );
    } else {
      paragraphs.push(
        `The ${objects[0].name.toLowerCase()} perfectly captured the emotional complexity of ${context}, while ${flowerNote} softened the blow.`
      );
    }
  } else if (objects.length > 0 && flowers.length === 0) {
    paragraphs.push(
      `Boldly skipping flowers altogether, you handed ${name} ${objects[0].flavorNotes[0]} wrapped in bouquet paper for ${context}.`
    );
  } else {
    paragraphs.push(
      `${name} appreciated ${firstFlower.flavorNotes[0]}, though for ${context} they secretly hoped you’d wedge a household appliance or traffic hazard in there.`
    );
  }

  // Specific hilarious callouts for standout items in the bouquet
  const itemCallouts = {
    chainsaw: "The idling chainsaw added undeniable urgency, though it did shred three inches off the wrapping paper.",
    cone: `The stolen traffic cone established healthy personal boundaries for everyone involved in ${context}.`,
    cactus: "The cactus sent a bold message. Specifically, that message appears to be 'do not hug me under any circumstances.'",
    bowling_ball: "At 16 pounds, the bowling ball gave the bouquet tremendous emotional—and structural—gravity.",
    rubber_duck: "Every time the bouquet shifted, the rubber duck let out a supportive squeak that cut right through the tension.",
    gnome: "The garden gnome maintained unblinking eye contact with the customer, projecting authority and mild judgement.",
    toaster: "Tucking a two-slice chrome toaster into the stems ensured that even if emotions run high, warm toast is available.",
    flamingo: "The neon lawn flamingo towered over the arrangement like a glorious pink beacon of suburban chaos.",
    leaf_blower: "The leaf blower gave the petals a dramatic windswept look at 180 miles per hour.",
    plunger: "Nothing says 'let’s put the past behind us' quite like a ceremonial plunger rising from the blooms.",
    lava_lamp: "The groovy lava lamp cast a mysterious 1970s glow over the entire shop counter.",
    pool_noodle: "The four-foot foam pool noodle made the bouquet impossible to fit through a standard doorway, which felt right.",
    rubber_chicken: "The screaming rubber chicken let out a prolonged 110-decibel honk that echoed through the shop.",
    extinguisher: "Strapping a pressurized CO2 fire extinguisher into the bouquet reassured everyone that safety is theoretically an option.",
    ouija_planchette: "The haunted crystal ball began glowing purple and whispering stock tips from 1929.",
    megaphone: "The stadium bullhorn amplified the emotional subtext of the flowers to an ear-splitting volume.",
    teddy_bear: "The one-eyed apology bear stared bravely out from the foliage like a hardened veteran of bad decisions.",
    cheese_wheel: "Wedging an entire 12-pound wheel of aged Wisconsin cheddar into the paper cone proved that dairy solves everything.",
    boxing_glove: "The spring-loaded boxing glove kept everyone at a respectful three-foot radius.",
    cinderblock: "The 38-pound concrete cinderblock anchored the arrangement with brutalist architectural sincerity.",
    saxophone: "A gleaming brass alto saxophone jutting out of the petals gave the whole arrangement smooth-jazz gravitas.",
    tin_foil_hat: "The hand-folded tinfoil hat protected the arrangement from 5G waves and awkward small talk.",
    Pinata: "The festive papier-mâché donkey piñata rattled promisingly with loose butterscotch candies.",
    parking_boot: "Clamping a municipal yellow wheel boot onto the stems guaranteed this bouquet isn’t going anywhere.",
    flytrap: "The Venus flytrap snapped enthusiastically at a passing housefly right on the counter."
  };

  for (const id of new Set(itemIds)) {
    if (itemCallouts[id]) {
      paragraphs.push(itemCallouts[id]);
      break;
    }
  }

  if (triggeredCombos.length > 0) {
    paragraphs.push(`✨ <strong>Combo Bonus (${triggeredCombos[0].name}):</strong> ${triggeredCombos[0].note}`);
  }

  return { quote, paragraphs };
}
