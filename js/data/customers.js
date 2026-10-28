// ==========================================================================
// THE WORLD'S WORST FLORIST - Customer Personas, 240 Handcrafted Situations,
// & Procedural Combinator Engine
// ==========================================================================

export const CUSTOMER_ARCHETYPES = [
  {
    id: 'frank',
    names: ['Frank', 'Barnaby', 'Gus', 'Walter', 'Hank', 'Norm', 'Otis', 'Earl', 'Clyde', 'Arthur'],
    titles: ['Exhausted Neighbor', 'Suburban Dad', 'Retiree', 'Amateur Beekeeper', 'HOA Survivor', 'Bowling Captain'],
    skinColors: ['#ffcdb2', '#f1c27d', '#e0ac69', '#c68642'],
    shirtColors: ['#3a86ff', '#2a9d8f', '#e76f51', '#8338ec'],
    hairStyle: 'mustache'
  },
  {
    id: 'brenda',
    names: ['Brenda', 'Mildred', 'Agnes', 'Dolores', 'Gladys', 'Phyllis', 'Wanda', 'Marge', 'Estelle', 'judith'],
    titles: ['Competitive Aunt', 'Bingo Champion', 'Neighborhood Watch', 'Cat Enthusiast', 'Bake Sale General', 'Notary Public'],
    skinColors: ['#ffddd2', '#f1c27d', '#d8976c', '#8d5524'],
    shirtColors: ['#ff006e', '#fb5607', '#9b5de5', '#00bbf9'],
    hairStyle: 'bun'
  },
  {
    id: 'chad',
    names: ['Trevor', 'Bryce', 'Kip', 'Toby', 'Zack', 'Scooter', 'Dirk', 'Blake', 'Lance', 'Cody'],
    titles: ['Forklift Apprentice', 'Jet-Ski Owner', 'Local Daredevil', 'Cousin-in-Law', 'Volunteer Firefighter', 'DJ-for-Hire'],
    skinColors: ['#fde2e4', '#f1c27d', '#c68642', '#8d5524'],
    shirtColors: ['#ffbe0b', '#06d6a0', '#ef476f', '#118ab2'],
    hairStyle: 'spiky'
  },
  {
    id: 'chloe',
    names: ['Chloe', 'Penelope', 'Sloane', 'Daphne', 'Maeve', 'Trixie', 'Hazel', 'Phoebe', 'Gwen', 'Astrid'],
    titles: ['Overwhelmed Bridesmaid', 'Art Teacher', 'Ferret Owner', 'Startup Founder', 'Roommate', 'Tarot Reader'],
    skinColors: ['#ffe5d9', '#f1c27d', '#e0ac69', '#8d5524'],
    shirtColors: ['#f15bb5', '#00f5d4', '#fee440', '#9b5de5'],
    hairStyle: 'bob'
  }
];

// ---------------------------------------------------------------------------
// 240 HANDCRAFTED CUSTOMER SITUATIONS
// ---------------------------------------------------------------------------
export const HANDCRAFTED_SITUATIONS = [
  // 1 - 20: Animals & Wildlife Mishaps
  {
    text: "My brother accidentally bought a duck at a hardware store auction.",
    desired: ['whimsy', 'encouragement', 'confusion'],
    contextTag: 'buying an unexpected duck'
  },
  {
    text: "My aunt won a heated 45-minute argument with a raccoon on her porch.",
    desired: ['toughness', 'celebration', 'danger'],
    contextTag: 'defeating a porch raccoon'
  },
  {
    text: "I'm apologizing to my landlord for accidentally releasing 400 bees indoors.",
    desired: ['apology', 'safety', 'caution'],
    contextTag: 'indoor bee release'
  },
  {
    text: "My coworker successfully fought a Canadian goose in the office parking lot.",
    desired: ['toughness', 'celebration', 'excitement'],
    contextTag: 'parking lot goose combat'
  },
  {
    text: "A pelican stole my husband's sandwich and also his reading glasses.",
    desired: ['comfort', 'confusion', 'whimsy'],
    contextTag: 'pelican grand theft'
  },
  {
    text: "My neighbor's tortoise escaped and was found three feet away after six hours.",
    desired: ['celebration', 'comfort', 'whimsy'],
    contextTag: 'high-speed tortoise recovery'
  },
  {
    text: "My cousin is trying to convince a stray possum to leave her garage peacefully.",
    desired: ['friendliness', 'caution', 'comfort'],
    contextTag: 'possum diplomacy'
  },
  {
    text: "Our family parrot learned to mimic the smoke detector at 3:00 AM.",
    desired: ['chaos', 'confusion', 'seriousness'],
    contextTag: 'psychological parrot warfare'
  },
  {
    text: "I accidentally entered my golden retriever into a livestock beauty pageant.",
    desired: ['beauty', 'whimsy', 'encouragement'],
    contextTag: 'unauthorized dog pageantry'
  },
  {
    text: "My mailman was chased up a flagpole by two very determined chihuahuas.",
    desired: ['safety', 'comfort', 'apology'],
    contextTag: 'chihuahua siege survival'
  },
  {
    text: "My sister adopted a goat that only respects people holding power tools.",
    desired: ['toughness', 'danger', 'utility'],
    contextTag: 'earning a goat’s respect'
  },
  {
    text: "A squirrel has been leaving mysterious shiny bolts on my windowsill every Tuesday.",
    desired: ['mystery', 'weirdness', 'friendliness'],
    contextTag: 'squirrel barter economy'
  },
  {
    text: "My dad lost a staring contest with an owl and hasn't been the same since.",
    desired: ['encouragement', 'mystery', 'seriousness'],
    contextTag: 'recovering from owl intimidation'
  },
  {
    text: "My roommate's hamster escaped into the heating vents and now runs the apartment.",
    desired: ['caution', 'weirdness', 'utility'],
    contextTag: 'negotiating with a vent hamster'
  },
  {
    text: "We just discovered the 'stray cat' my grandma has been feeding is actually a badger.",
    desired: ['danger', 'caution', 'confusion'],
    contextTag: 'accidental badger hospitality'
  },
  {
    text: "My fiancé got headbutted by an alpaca at a petting zoo on our anniversary.",
    desired: ['romance', 'comfort', 'whimsy'],
    contextTag: 'romantic alpaca concussion'
  },
  {
    text: "A flock of wild turkeys has claimed my driveway as their sovereign territory.",
    desired: ['toughness', 'danger', 'caution'],
    contextTag: 'reclaiming the driveway from turkeys'
  },
  {
    text: "My niece's goldfish survived jumping out of its bowl into a bowl of guacamole.",
    desired: ['celebration', 'excitement', 'weirdness'],
    contextTag: 'guacamole miracle survival'
  },
  {
    text: "I promised to pet-sit my boss's iguana and it has been judging my posture all weekend.",
    desired: ['seriousness', 'mystery', 'comfort'],
    contextTag: 'appeasing a judgmental reptile'
  },
  {
    text: "Two seagulls teamed up to open the sunroof of my sedan at the beach.",
    desired: ['chaos', 'confusion', 'safety'],
    contextTag: 'coordinated seagull heist'
  },

  // 21 - 40: Yardwork, Home Repair & Suburban Disasters
  {
    text: "My neighbor survived a riding lawnmower incident involving an inflatable pool.",
    desired: ['encouragement', 'safety', 'toughness'],
    contextTag: 'surviving a lawnmower mishap'
  },
  {
    text: "My boss retired yesterday and immediately bought an industrial flamethrower.",
    desired: ['excitement', 'caution', 'celebration'],
    contextTag: 'retirement flamethrower ownership'
  },
  {
    text: "I backed my father-in-law's snowblower through his prized begonias.",
    desired: ['apology', 'beauty', 'seriousness'],
    contextTag: 'snowblower floral carnage'
  },
  {
    text: "My husband tried to fix a leaky faucet and somehow turned off the street's Wi-Fi.",
    desired: ['utility', 'confusion', 'encouragement'],
    contextTag: 'impossible plumbing physics'
  },
  {
    text: "My neighbor's gender reveal party accidentally dyed our entire cul-de-sac purple.",
    desired: ['celebration', 'chaos', 'beauty'],
    contextTag: 'purple cul-de-sac fallout'
  },
  {
    text: "I'm congratulating my wife for assembling a Swedish wardrobe without crying once.",
    desired: ['celebration', 'utility', 'romance'],
    contextTag: 'triumphant flat-pack assembly'
  },
  {
    text: "My uncle tried to trim a hedge with a weed-whacker while wearing rollerblades.",
    desired: ['excitement', 'safety', 'danger'],
    contextTag: 'rollerblade topiary surgery'
  },
  {
    text: "We dug up the backyard patio and found 47 buried bowling trophies from 1984.",
    desired: ['mystery', 'weirdness', 'weight'],
    contextTag: 'cursed trophy excavation'
  },
  {
    text: "I accidentally glued my hand to my neighbor's mailbox while returning his wrench.",
    desired: ['apology', 'friendliness', 'confusion'],
    contextTag: 'mailbox adhesive bonding'
  },
  {
    text: "My HOA president sent me a formal warning because my lawn looks 'too confident.'",
    desired: ['toughness', 'danger', 'beauty'],
    contextTag: 'asserting lawn dominance'
  },
  {
    text: "My brother-in-law pressure-washed his driveway so hard he erased the pavement.",
    desired: ['excitement', 'utility', 'seriousness'],
    contextTag: 'extreme pressure washing'
  },
  {
    text: "Our robotic vacuum cleaner escaped out the front door and is heading toward the highway.",
    desired: ['chaos', 'caution', 'encouragement'],
    contextTag: 'runaway robot vacuum'
  },
  {
    text: "I offered to paint my sister's kitchen and accidentally chose 'Radioactive Lime.'",
    desired: ['apology', 'happiness', 'weirdness'],
    contextTag: 'glow-in-the-dark kitchen remorse'
  },
  {
    text: "My grandpa built a bird feeder that launches squirrels three feet into the air.",
    desired: ['whimsy', 'excitement', 'utility'],
    contextTag: 'aerospace squirrel engineering'
  },
  {
    text: "The ceiling fan fell into the Thanksgiving mashed potatoes, and nobody even blinked.",
    desired: ['comfort', 'seriousness', 'chaos'],
    contextTag: 'high-velocity mashed potatoes'
  },
  {
    text: "My neighbor has been vacuuming his artificial turf in a tuxedo for two hours.",
    desired: ['mystery', 'weirdness', 'friendliness'],
    contextTag: 'formal-wear lawn vacuuming'
  },
  {
    text: "I'm welcoming new neighbors whose moving truck just rolled into our pond.",
    desired: ['friendliness', 'comfort', 'safety'],
    contextTag: 'aquatic moving day'
  },
  {
    text: "My cousin tried to smoke a brisket and summoned three fire trucks instead.",
    desired: ['encouragement', 'caution', 'excitement'],
    contextTag: 'five-alarm barbecue'
  },
  {
    text: "We locked ourselves out of the house and the dog just locked the deadbolt from inside.",
    desired: ['confusion', 'utility', 'apology'],
    contextTag: 'canine home eviction'
  },
  {
    text: "My mom won a legal battle with the city over her 14-foot concrete gargoyle.",
    desired: ['celebration', 'weight', 'toughness'],
    contextTag: 'municipal gargoyle victory'
  },

  // 41 - 60: Romance, Weddings & Questionable Dates
  {
    text: "I'm proposing to my girlfriend at the exact demolition derby where we first met.",
    desired: ['romance', 'danger', 'excitement'],
    contextTag: 'demolition derby marriage proposal'
  },
  {
    text: "My first date went great until I panicked and ate the decorative wax fruit.",
    desired: ['romance', 'apology', 'weirdness'],
    contextTag: 'digesting decorative wax pears'
  },
  {
    text: "It's our 10th wedding anniversary and we're celebrating by tearing down a drywall.",
    desired: ['romance', 'utility', 'toughness'],
    contextTag: 'romantic sledgehammer anniversary'
  },
  {
    text: "My crush asked me to help her move a 400-pound cast-iron radiator down four flights.",
    desired: ['romance', 'weight', 'toughness'],
    contextTag: 'hernia-inducing courtship'
  },
  {
    text: "I accidentally called my date 'Mom' and then immediately tripped into a salad bar.",
    desired: ['apology', 'comfort', 'confusion'],
    contextTag: 'catastrophic salad bar date'
  },
  {
    text: "My best friend is marrying a man who owns seventeen non-functioning motorcycles.",
    desired: ['celebration', 'utility', 'caution'],
    contextTag: 'seventeen-motorcycle matrimony'
  },
  {
    text: "I want to tell someone I love them, but also that they need to stop parking on my petunias.",
    desired: ['romance', 'caution', 'danger'],
    contextTag: 'passive-aggressive romantic parking warning'
  },
  {
    text: "My husband forgot Valentine's Day, panicked, and gifted me a snow shovel.",
    desired: ['romance', 'seriousness', 'utility'],
    contextTag: 'retaliatory Valentine arrangement'
  },
  {
    text: "The wedding DJ accidentally played forklift safety training audio during the first dance.",
    desired: ['romance', 'safety', 'whimsy'],
    contextTag: 'OSHA-certified first dance'
  },
  {
    text: "I'm trying to win back an ex who left me because I collect vintage traffic signs.",
    desired: ['romance', 'apology', 'caution'],
    contextTag: 'municipal signage heartbreak'
  },
  {
    text: "My blind date showed up wearing medieval chainmail 'just in case.'",
    desired: ['romance', 'safety', 'mystery'],
    contextTag: 'armored blind date'
  },
  {
    text: "Our honeymoon kayak flipped and a beaver stole my wedding ring.",
    desired: ['romance', 'comfort', 'chaos'],
    contextTag: 'beaver honeymoon robbery'
  },
  {
    text: "I need a bouquet that says 'I find your obsession with conspiracy podcasts endearing.'",
    desired: ['romance', 'mystery', 'weirdness'],
    contextTag: 'tinfoil-hat romance'
  },
  {
    text: "My wife beat me at miniature golf by 22 strokes and won't stop bowing.",
    desired: ['celebration', 'romance', 'seriousness'],
    contextTag: 'mini-golf marital defeat'
  },
  {
    text: "I accidentally invited both my date and my driving instructor to the same fondue table.",
    desired: ['confusion', 'caution', 'romance'],
    contextTag: 'three-way fondue parallel parking test'
  },
  {
    text: "My boyfriend tried to serenade me under my window and fell into the recycling bins.",
    desired: ['romance', 'comfort', 'safety'],
    contextTag: 'aluminum-can Romeo'
  },
  {
    text: "We're renewing our vows inside a haunted car wash.",
    desired: ['romance', 'mystery', 'excitement'],
    contextTag: 'spooky deluxe-wax vows'
  },
  {
    text: "I need to apologize for bringing a live lobster to a vegan speed-dating event.",
    desired: ['apology', 'confusion', 'weirdness'],
    contextTag: 'crustacean speed-dating faux pas'
  },
  {
    text: "My partner and I survived a 14-hour road trip with a broken radio stuck on polka.",
    desired: ['romance', 'toughness', 'celebration'],
    contextTag: 'non-stop polka endurance'
  },
  {
    text: "I'm secretly in love with my dentist, who just told me I have 'aggressive molars.'",
    desired: ['romance', 'toughness', 'beauty'],
    contextTag: 'aggressive molar infatuation'
  },

  // 61 - 80: Workplace, Bosses & Career Absurdity
  {
    text: "I accidentally hit 'Reply All' to 4,000 employees with a recipe for haunted meatloaf.",
    desired: ['apology', 'mystery', 'confusion'],
    contextTag: 'company-wide haunted meatloaf memo'
  },
  {
    text: "My coworker is retiring after 30 years of pretending to know what a spreadsheet is.",
    desired: ['celebration', 'mystery', 'happiness'],
    contextTag: 'thirty years of fake Excel'
  },
  {
    text: "Our IT guy fixed the office printer by hitting it with a broom and whispering Latin.",
    desired: ['celebration', 'utility', 'mystery'],
    contextTag: 'printer exorcism'
  },
  {
    text: "I need to congratulate my intern for surviving her first week without setting the breakroom on fire.",
    desired: ['encouragement', 'safety', 'celebration'],
    contextTag: 'flame-free internship milestone'
  },
  {
    text: "My boss got stuck in a child's swing at the company picnic and had to be greased out.",
    desired: ['comfort', 'seriousness', 'friendliness'],
    contextTag: 'buttered executive rescue'
  },
  {
    text: "I'm quitting my accounting job to become a full-time professional monster truck announcer.",
    desired: ['excitement', 'chaos', 'celebration'],
    contextTag: 'accounting-to-monster-truck pivot'
  },
  {
    text: "Someone in HR keeps microwaving trout at 9:15 AM and we need to send a clear warning.",
    desired: ['danger', 'caution', 'seriousness'],
    contextTag: 'breakroom trout deterrence'
  },
  {
    text: "My team just finished a 6-month project that was cancelled five minutes after we presented it.",
    desired: ['comfort', 'weight', 'encouragement'],
    contextTag: 'corporate futility solidarity'
  },
  {
    text: "Our CEO tried to do a trust fall off the conference table before anyone was ready.",
    desired: ['safety', 'apology', 'comfort'],
    contextTag: 'unannounced executive trust fall'
  },
  {
    text: "I was promoted to 'Director of Unforeseen Circumstances' and nobody will tell me what that means.",
    desired: ['mystery', 'caution', 'confusion'],
    contextTag: 'ominous job promotion'
  },
  {
    text: "My forklift instructor is celebrating 100 days with zero structural collapses.",
    desired: ['safety', 'celebration', 'utility'],
    contextTag: 'warehouse structural integrity party'
  },
  {
    text: "I fell asleep on my keyboard during a Zoom call and typed 18 pages of the letter 'Q'.",
    desired: ['apology', 'seriousness', 'weirdness'],
    contextTag: 'eighteen pages of Q'
  },
  {
    text: "My business partner invested our entire Q4 budget into inflatable tube men.",
    desired: ['whimsy', 'chaos', 'confusion'],
    contextTag: 'wacky waving portfolio'
  },
  {
    text: "The night-shift janitor single-handedly trapped a raccoon in a recycling bin using only a mop.",
    desired: ['toughness', 'utility', 'celebration'],
    contextTag: 'janitorial tactical heroism'
  },
  {
    text: "I'm apologizing to the fire marshal for blocking the emergency exit with a cheese wheel pyramid.",
    desired: ['apology', 'safety', 'caution'],
    contextTag: 'hazardous cheddar architecture'
  },
  {
    text: "My coworker brought her 'emotional support sourdough starter' to a client pitch.",
    desired: ['comfort', 'weirdness', 'encouragement'],
    contextTag: 'fermented corporate pitch'
  },
  {
    text: "We are welcoming a new safety inspector who already slipped on a banana peel in the lobby.",
    desired: ['safety', 'friendliness', 'whimsy'],
    contextTag: 'slapstick OSHA inspection'
  },
  {
    text: "I accidentally shredded the original lease to our office building while making confetti.",
    desired: ['celebration', 'apology', 'chaos'],
    contextTag: 'felony confetti'
  },
  {
    text: "My supervisor challenged the vending machine to a wrestling match and lost on points.",
    desired: ['toughness', 'weight', 'comfort'],
    contextTag: 'vending machine TKO'
  },
  {
    text: "I need a desk arrangement that discourages people from asking me 'Got a minute?' on Fridays.",
    desired: ['danger', 'caution', 'seriousness'],
    contextTag: 'Friday anti-conversation fortress'
  },

  // 81 - 100: Bizarre Milestones, Hobbies & Existential Moments
  {
    text: "My grandma just got her motorcycle learner's permit at age 83.",
    desired: ['excitement', 'safety', 'celebration'],
    contextTag: 'octogenarian biker debut'
  },
  {
    text: "My roommate came in third place at an underground competitive ironing tournament.",
    desired: ['celebration', 'utility', 'seriousness'],
    contextTag: 'extreme competitive ironing'
  },
  {
    text: "My uncle claims he was abducted by aliens who critiqued his lawn care.",
    desired: ['mystery', 'weirdness', 'encouragement'],
    contextTag: 'extraterrestrial landscaping review'
  },
  {
    text: "I survived getting locked inside a mattress store overnight.",
    desired: ['comfort', 'celebration', 'confusion'],
    contextTag: 'overnight Posturepedic survival'
  },
  {
    text: "My best friend just finished eating a 72-ounce steak and is currently seeing through time.",
    desired: ['weight', 'toughness', 'comfort'],
    contextTag: 'meat-sweat transcendence'
  },
  {
    text: "My teenage son started a heavy metal band where all the instruments are kitchen appliances.",
    desired: ['excitement', 'chaos', 'encouragement'],
    contextTag: 'culinary thrash metal'
  },
  {
    text: "I'm congratulating my barber for finally admitting he doesn't know how to cut bangs.",
    desired: ['friendliness', 'apology', 'beauty'],
    contextTag: 'honest bad haircut'
  },
  {
    text: "My neighbor is convinced his garden gnomes move two inches closer to the porch every night.",
    desired: ['mystery', 'caution', 'weirdness'],
    contextTag: 'creeping ceramic insurgency'
  },
  {
    text: "I won $12 on a scratch-off ticket and immediately acted like a Victorian baron.",
    desired: ['celebration', 'beauty', 'whimsy'],
    contextTag: 'twelve-dollar aristocracy'
  },
  {
    text: "My aunt got banned from the local library for aggressively shushing the librarian.",
    desired: ['toughness', 'seriousness', 'chaos'],
    contextTag: 'hostile library shushing'
  },
  {
    text: "My cousin is recovering after trying to catch a bowling ball like a basketball.",
    desired: ['comfort', 'weight', 'safety'],
    contextTag: 'bowling ball rebound physics'
  },
  {
    text: "We accidentally joined a cult, realized it was actually a CrossFit gym, and left immediately.",
    desired: ['confusion', 'safety', 'celebration'],
    contextTag: 'narrow escape from burpees'
  },
  {
    text: "My dad has spent four weeks trying to outsmart a single mole in his vegetable patch.",
    desired: ['toughness', 'utility', 'seriousness'],
    contextTag: 'subterranean mole warfare'
  },
  {
    text: "I'm cheering up a friend whose psychic told him his aura looks like 'wet cardboard.'",
    desired: ['encouragement', 'mystery', 'beauty'],
    contextTag: 'soggy aura rehabilitation'
  },
  {
    text: "My sister got her head stuck between the banister rails at her own 30th birthday party.",
    desired: ['celebration', 'utility', 'whimsy'],
    contextTag: 'banister birthday extraction'
  },
  {
    text: "I need a centerpiece for a dinner party where nobody likes each other.",
    desired: ['danger', 'seriousness', 'confusion'],
    contextTag: 'hostile dinner party centerpiece'
  },
  {
    text: "My brother tried to parallel park a pontoon boat in a pharmacy drive-thru.",
    desired: ['chaos', 'caution', 'confusion'],
    contextTag: 'nautical drive-thru incident'
  },
  {
    text: "My yoga instructor pulled a hamstring while demonstrating 'Supreme Inner Peace.'",
    desired: ['comfort', 'encouragement', 'whimsy'],
    contextTag: 'ironic yoga injury'
  },
  {
    text: "I'm thanking the tow-truck driver who pulled my Prius out of a decorative fountain.",
    desired: ['friendliness', 'utility', 'apology'],
    contextTag: 'fountain Prius extraction'
  },
  {
    text: "My landlord is raising the rent because a ghost in the attic is 'technically a third roommate.'",
    desired: ['mystery', 'danger', 'weight'],
    contextTag: 'paranormal lease dispute'
  },

  // 101 - 120: Unhinged Comedy & Oddly Specific Situations
  {
    text: "I challenged the mayor to a hot-dog eating contest and now we both need medical supervision.",
    desired: ['toughness', 'comfort', 'celebration'],
    contextTag: 'mayoral frankfurter duel'
  },
  {
    text: "My mother-in-law is visiting and I want the guest room to feel 'politely inhospitable.'",
    desired: ['danger', 'beauty', 'caution'],
    contextTag: 'tactical guest-room hospitality'
  },
  {
    text: "My neighbor's trampoline blew onto my roof during a storm and we've decided to keep it there.",
    desired: ['excitement', 'whimsy', 'safety'],
    contextTag: 'rooftop trampoline annexation'
  },
  {
    text: "I'm apologizing for bringing a leaf blower to a silent meditation retreat.",
    desired: ['apology', 'chaos', 'comfort'],
    contextTag: 'high-decibel mindfulness'
  },
  {
    text: "My uncle won a lifetime supply of mayonnaise and is experiencing an existential crisis.",
    desired: ['confusion', 'comfort', 'weight'],
    contextTag: 'infinite mayonnaise burden'
  },
  {
    text: "My book club stopped reading books six months ago and now just plots minor heists.",
    desired: ['mystery', 'excitement', 'friendliness'],
    contextTag: 'suburban literary larceny'
  },
  {
    text: "I accidentally wore the exact same neon tracksuit as the judge at traffic court.",
    desired: ['apology', 'beauty', 'seriousness'],
    contextTag: 'judicial fashion twinning'
  },
  {
    text: "My daughter's science fair volcano erupted with enough force to dent the gymnasium scoreboard.",
    desired: ['celebration', 'excitement', 'danger'],
    contextTag: 'weapons-grade baking soda volcano'
  },
  {
    text: "I need a bouquet that says 'I know you ate my labeled lasagna, Craig.'",
    desired: ['danger', 'seriousness', 'mystery'],
    contextTag: 'stolen lasagna ultimatum'
  },
  {
    text: "My best friend is celebrating five years since he last fell into a zoo enclosure.",
    desired: ['celebration', 'safety', 'caution'],
    contextTag: 'five years zoo-moat free'
  },
  {
    text: "A mime got trapped in an actual invisible box outside our bakery and refuses help.",
    desired: ['weirdness', 'confusion', 'encouragement'],
    contextTag: 'structural mime emergency'
  },
  {
    text: "My grandpa accidentally joined a teenage breakdancing crew at the mall food court.",
    desired: ['excitement', 'whimsy', 'safety'],
    contextTag: 'orthopedic mall breakdancing'
  },
  {
    text: "I'm apologizing to my bowling team for throwing the ball backward into the nacho bar.",
    desired: ['apology', 'weight', 'chaos'],
    contextTag: 'reverse-trajectory nacho strike'
  },
  {
    text: "My wife just discovered that our 'antique vase' is actually an upside-down traffic cone painted blue.",
    desired: ['beauty', 'confusion', 'romance'],
    contextTag: 'counterfeit municipal pottery'
  },
  {
    text: "My neighbor survived being chased three blocks by a tumbleweed the size of a Buick.",
    desired: ['toughness', 'safety', 'encouragement'],
    contextTag: 'botanical road rage survival'
  },
  {
    text: "I'm congratulating myself for not buying a haunted ventriloquist dummy at a yard sale.",
    desired: ['celebration', 'caution', 'mystery'],
    contextTag: 'resisting a cursed dummy'
  },
  {
    text: "My cousin is trying to parallel park a limousine full of clowns.",
    desired: ['whimsy', 'caution', 'chaos'],
    contextTag: 'high-density clown parking'
  },
  {
    text: "Our neighborhood watch caught the 'midnight porch bandit' and it was three raccoons in a trenchcoat.",
    desired: ['mystery', 'weirdness', 'celebration'],
    contextTag: 'trenchcoat raccoon bust'
  },
  {
    text: "I need to thank my plumber without making eye contact after what he pulled out of the drain.",
    desired: ['friendliness', 'utility', 'seriousness'],
    contextTag: 'unspoken plumbing trauma'
  },
  {
    text: "My brother is entering a demolition derby driving a 1997 minivan painted like a bumblebee.",
    desired: ['excitement', 'toughness', 'whimsy'],
    contextTag: 'bumblebee minivan carnage'
  },

  // 121 - 150: Culinary Catastrophes & Dinner Party Disasters
  {
    text: "My dad tried to deep-fry a frozen turkey and launched the garage door into orbit.",
    desired: ['excitement', 'safety', 'caution'],
    contextTag: 'ballistic Thanksgiving turkey'
  },
  {
    text: "I accidentally brought a 12-pound wheel of aged cheddar to a lactose-intolerant support group.",
    desired: ['apology', 'weight', 'confusion'],
    contextTag: 'unauthorized dairy intimidation'
  },
  {
    text: "My roommate tried to make artisanal kombucha and it just breached containment in the pantry.",
    desired: ['danger', 'weirdness', 'caution'],
    contextTag: 'sentient kombucha breach'
  },
  {
    text: "My wife won first prize at the county chili cook-off using a recipe she found in a 1974 car manual.",
    desired: ['celebration', 'utility', 'mystery'],
    contextTag: 'motor-oil chili championship'
  },
  {
    text: "I mistook ghost pepper hot sauce for strawberry syrup on my boss's waffles.",
    desired: ['apology', 'danger', 'comfort'],
    contextTag: 'weapons-grade breakfast waffles'
  },
  {
    text: "My cousin is marrying a competitive cheese-roller who proposed at the bottom of a very steep hill.",
    desired: ['romance', 'excitement', 'safety'],
    contextTag: 'downhill dairy matrimony'
  },
  {
    text: "Our sourdough starter grew so large it now occupies the guest bedroom and demands rent.",
    desired: ['weirdness', 'weight', 'seriousness'],
    contextTag: 'feudal sourdough overlord'
  },
  {
    text: "I panicked during a Hibachi dinner and tried to catch the flying shrimp in my purse.",
    desired: ['apology', 'whimsy', 'chaos'],
    contextTag: 'handbag shrimp interception'
  },
  {
    text: "My uncle is celebrating 40 years of refusing to eat any vegetable that isn't pickled.",
    desired: ['celebration', 'toughness', 'weirdness'],
    contextTag: 'forty-year vinegar diet'
  },
  {
    text: "I dropped a 5-gallon pot of bolognese on a white rug and blamed it on a poltergeist.",
    desired: ['mystery', 'apology', 'chaos'],
    contextTag: 'paranormal pasta alibi'
  },
  {
    text: "My neighbor challenged a Waffle House line cook to a duel ofspatulas and actually earned his respect.",
    desired: ['toughness', 'celebration', 'utility'],
    contextTag: 'late-night spatula knighthood'
  },
  {
    text: "I'm cheering up my sister after her gender-reveal cake turned out to be solid concrete from the display window.",
    desired: ['comfort', 'weight', 'encouragement'],
    contextTag: 'structural bakery mix-up'
  },
  {
    text: "My boyfriend tried to flambé bananas and singed off both of his eyebrows before dessert.",
    desired: ['romance', 'safety', 'comfort'],
    contextTag: 'eyebrow-free bananas foster'
  },
  {
    text: "Someone replaced all the water in the office cooler with lukewarm clam chowder.",
    desired: ['confusion', 'danger', 'seriousness'],
    contextTag: 'corporate chowder sabotage'
  },
  {
    text: "My grandma won a bake-off by intimidating the other contestants with a rolling pin.",
    desired: ['toughness', 'celebration', 'danger'],
    contextTag: 'full-contact pastry competition'
  },
  {
    text: "I accidentally ordered 400 pounds of looserutabagas on a wholesale app at 2:00 AM.",
    desired: ['confusion', 'weight', 'whimsy'],
    contextTag: 'midnight rutabaga futures'
  },
  {
    text: "My friend is opening a food truck that only serves toast and unsolicited life advice.",
    desired: ['encouragement', 'comfort', 'seriousness'],
    contextTag: 'philosophical carb wagon'
  },
  {
    text: "The ice sculpture at our charity gala melted into the exact shape of an angry badger.",
    desired: ['beauty', 'weirdness', 'mystery'],
    contextTag: 'ominous melting swan'
  },
  {
    text: "I need to thank the firefighter who rescued my garlic bread after I evacuated the apartment.",
    desired: ['friendliness', 'happiness', 'safety'],
    contextTag: 'heroic garlic bread extraction'
  },
  {
    text: "My brother-in-law ate an entire decorative centerpiece before realizing it was potpourri.",
    desired: ['comfort', 'beauty', 'confusion'],
    contextTag: 'high-fiber potpourri snacking'
  },
  {
    text: "We hosted a murder-mystery dinner and the caterer actually quit mid-soup out of sheer terror.",
    desired: ['mystery', 'chaos', 'apology'],
    contextTag: 'too-convincing dinner theater'
  },
  {
    text: "My aunt is convinced her air fryer is picking up encrypted numbers-station radio broadcasts.",
    desired: ['mystery', 'caution', 'weirdness'],
    contextTag: 'espionage kitchen appliance'
  },
  {
    text: "I'm congratulating my roommate for finally throwing away the Tupperware from 2019 without opening it.",
    desired: ['celebration', 'safety', 'caution'],
    contextTag: 'biohazard Tupperware disposal'
  },
  {
    text: "My dad tried to slice a bagel with a bandsaw and is strangely proud of the symmetry.",
    desired: ['utility', 'danger', 'happiness'],
    contextTag: 'precision workshop breakfast'
  },
  {
    text: "I promised to bring a 'light salad' to the potluck and showed up with a 19-pound wheel of Gouda.",
    desired: ['weight', 'celebration', 'friendliness'],
    contextTag: 'nineteen-pound Gouda salad'
  },
  {
    text: "My coworker got his tie caught in the panini press and had to eat lunch bent at a 90-degree angle.",
    desired: ['comfort', 'utility', 'whimsy'],
    contextTag: 'grilled silk necktie'
  },
  {
    text: "Our blender achieved liftoff when my husband tried to puree an entire uncut coconut.",
    desired: ['excitement', 'chaos', 'danger'],
    contextTag: 'supersonic coconut shrapnel'
  },
  {
    text: "I'm apologizing to the sushi chef for asking if he could 'make mine medium-well.'",
    desired: ['apology', 'seriousness', 'confusion'],
    contextTag: 'culinary diplomacy incident'
  },
  {
    text: "My neighbor built a brick pizza oven that accidentally functions as a lighthouse for low-flying aircraft.",
    desired: ['excitement', 'caution', 'utility'],
    contextTag: 'FAA-regulated pepperoni oven'
  },
  {
    text: "My best friend survived a blindfolded hot-wing challenge and can now hear colors.",
    desired: ['toughness', 'comfort', 'weirdness'],
    contextTag: 'capsaicin astral projection'
  },

  // 151 - 180: Neighborhood Feuds, Municipal Chaos & Traffic Incidents
  {
    text: "My neighbor painted a fake tunnel on the side of his garage and a golf cart actually drove into it.",
    desired: ['whimsy', 'caution', 'apology'],
    contextTag: 'Looney Tunes garage collision'
  },
  {
    text: "I'm celebrating the day the city finally filled the pothole that swallowed my uncle's Vespa.",
    desired: ['celebration', 'safety', 'weight'],
    contextTag: 'memorial pothole paving'
  },
  {
    text: "My cousin got a parking boot put on his riding lawnmower outside the post office.",
    desired: ['caution', 'seriousness', 'confusion'],
    contextTag: 'municipal lawnmower impound'
  },
  {
    text: "Our HOA board meeting devolved into a swordfight with rolled-up zoning maps.",
    desired: ['chaos', 'danger', 'seriousness'],
    contextTag: 'parliamentary zoning combat'
  },
  {
    text: "I accidentally joined a funeral procession thinking it was the line for the new car wash.",
    desired: ['apology', 'seriousness', 'confusion'],
    contextTag: 'somber deluxe undercarriage wash'
  },
  {
    text: "My retired neighbor bought a retired police megaphone and now narrates everyone's parallel parking.",
    desired: ['excitement', 'caution', 'chaos'],
    contextTag: 'live-commentary curb rash'
  },
  {
    text: "We are thanking the crossing guard who stopped a runaway port-a-potty during a windstorm.",
    desired: ['toughness', 'safety', 'celebration'],
    contextTag: 'high-velocity sanitation interception'
  },
  {
    text: "My brother tried to take a shortcut through a wet cement pour and is now part of Interstate 95.",
    desired: ['weight', 'comfort', 'utility'],
    contextTag: 'permanent highway integration'
  },
  {
    text: "My aunt is feuding with the neighbor over whose wind chimes are 'more passive-aggressive.'",
    desired: ['danger', 'beauty', 'mystery'],
    contextTag: 'acoustic porch warfare'
  },
  {
    text: "I backed into the mayor's prized topiary swan and reshaped it into a somewhat convincing duck.",
    desired: ['apology', 'beauty', 'whimsy'],
    contextTag: 'unauthorized topiary duck surgery'
  },
  {
    text: "My sister passed her driver's test despite accidentally activating the windshield wipers every time she turned left.",
    desired: ['celebration', 'safety', 'encouragement'],
    contextTag: 'hydrated left-turn licensing'
  },
  {
    text: "Someone yarn-bombed our entire cul-de-sac overnight, including the fire hydrant and my dog.",
    desired: ['comfort', 'whimsy', 'mystery'],
    contextTag: 'tactical suburban knitting'
  },
  {
    text: "My dad is running for City Council on the sole platform of 'Banning Leaf Blowers Before Noon.'",
    desired: ['seriousness', 'encouragement', 'chaos'],
    contextTag: 'single-issue decibel campaign'
  },
  {
    text: "I accidentally bought a retired city bus at a municipal auction and have nowhere to park it.",
    desired: ['weight', 'confusion', 'excitement'],
    contextTag: 'surprise 40-foot transit ownership'
  },
  {
    text: "Our neighborhood roundabout has confused my grandpa so badly he's been circling since Tuesday.",
    desired: ['caution', 'encouragement', 'confusion'],
    contextTag: 'perpetual roundabout orbit'
  },
  {
    text: "My neighbor's inflatable holiday snowman deflated onto my windshield while I was backing out.",
    desired: ['safety', 'whimsy', 'chaos'],
    contextTag: 'ambush by nylon snowman'
  },
  {
    text: "I'm apologizing for accidentally setting off the neighborhood tornado siren while looking for the bathroom light.",
    desired: ['apology', 'caution', 'chaos'],
    contextTag: 'civil-defense bathroom mix-up'
  },
  {
    text: "My coworker commutes on a unicycle while drinking hot soup from a mug and has never spilled a drop.",
    desired: ['toughness', 'excitement', 'Weirdness' in {} ? 'weirdness' : 'weirdness'],
    contextTag: 'unicycle bisque equilibrium'
  },
  {
    text: "The local snowplow buried my car so deep we only found it in April.",
    desired: ['celebration', 'weight', 'toughness'],
    contextTag: 'springtime sedan excavation'
  },
  {
    text: "I need a peace offering for the neighbor whose prize pumpkin rolled down the hill and dented my shed.",
    desired: ['friendliness', 'weight', 'apology'],
    contextTag: 'ballistic gourd diplomacy'
  },
  {
    text: "My uncle got trapped in a revolving door at City Hall with a man carrying a tuba.",
    desired: ['confusion', 'comfort', 'whimsy'],
    contextTag: 'brass-section revolving door jam'
  },
  {
    text: "We're celebrating our street finally getting a speed bump after my mom stood outside with a hairdryer.",
    desired: ['celebration', 'caution', 'safety'],
    contextTag: 'simulated radar-gun victory'
  },
  {
    text: "My brother-in-law tried to tow a tree stump with his golf cart and popped a 40-foot wheelie.",
    desired: ['excitement', 'toughness', 'danger'],
    contextTag: 'vertical golf-cart arboriculture'
  },
  {
    text: "I'm congratulating my neighbor for finally taking down his Christmas lights in August.",
    desired: ['celebration', 'friendliness', 'utility'],
    contextTag: 'late-summer festive teardown'
  },
  {
    text: "Someone keeps putting tiny traffic cones around every dandelion that grows in our park.",
    desired: ['caution', 'whimsy', 'mystery'],
    contextTag: 'micro-municipal weed protection'
  },
  {
    text: "My wife accidentally won a bidding war for an abandoned tollbooth on the turnpike.",
    desired: ['romance', 'confusion', 'utility'],
    contextTag: 'romantic tollbooth real estate'
  },
  {
    text: "Our trash cans blew three blocks away and formed a surprisingly intimidating barricade.",
    desired: ['chaos', 'toughness', 'caution'],
    contextTag: 'autonomous sanitation blockade'
  },
  {
    text: "I need to apologize to the meter maid after my parrot called her a 'fluorescent narco' from the window.",
    desired: ['apology', 'caution', 'weirdness'],
    contextTag: 'avian parking ticket escalation'
  },
  {
    text: "My cousin is celebrating one full year without backing into our decorative boulder.",
    desired: ['celebration', 'weight', 'safety'],
    contextTag: 'boulder-free driving anniversary'
  },
  {
    text: "The neighborhood kids opened a lemonade stand that requires a signed liability waiver.",
    desired: ['danger', 'caution', 'excitement'],
    contextTag: 'litigious citrus stand'
  },

  // 181 - 210: Holidays, Family Reunions & In-Law Survival
  {
    text: "My Uncle Gary showed up to the family reunion in a pontoon boat towed by a riding mower.",
    desired: ['celebration', 'excitement', 'chaos'],
    contextTag: 'amphibious uncle arrival'
  },
  {
    text: "I need to apologize for winning the family monopoly game so ruthlessly that Grandma left in an Uber.",
    desired: ['apology', 'seriousness', 'comfort'],
    contextTag: 'Park Place real-estate tyranny'
  },
  {
    text: "My sister announced her engagement at the exact moment my cousin's chair collapsed.",
    desired: ['romance', 'celebration', 'weight'],
    contextTag: 'simultaneous proposal and structural failure'
  },
  {
    text: "We discovered that two of our uncles have been secretly sending each other the exact same fruitcake since 1991.",
    desired: ['mystery', 'weight', 'friendliness'],
    contextTag: 'thirty-year tactical fruitcake exchange'
  },
  {
    text: "My father-in-law insisted on carving the roast with an electric hedge trimmer.",
    desired: ['utility', 'danger', 'excitement'],
    contextTag: 'landscaping-grade roast beef'
  },
  {
    text: "I'm comforting my nephew after the Easter Bunny costume head fell off and revealed his math teacher.",
    desired: ['comfort', 'confusion', 'whimsy'],
    contextTag: 'algebraic Easter bunny unmasking'
  },
  {
    text: "My mom accidentally invited both my ex-husband and a local mariachi band to the same small patio.",
    desired: ['chaos', 'celebration', 'caution'],
    contextTag: 'high-brass awkwardness'
  },
  {
    text: "Our family photo shoot ended when a swan chased the photographer into the marsh.",
    desired: ['beauty', 'danger', 'chaos'],
    contextTag: 'wetland portrait ambush'
  },
  {
    text: "My grandpa is celebrating his 90th birthday by finally telling everyone where he hid the remote in 2004.",
    desired: ['celebration', 'mystery', 'happiness'],
    contextTag: 'declassified remote-control location'
  },
  {
    text: "I need an arrangement that convinces my in-laws I am a 'stable, indoor-oriented person.'",
    desired: ['safety', 'seriousness', 'beauty'],
    contextTag: 'counterfeit domestic stability'
  },
  {
    text: "My brother brought a metal detector to Thanksgiving and dug up the backyard septic tank.",
    desired: ['utility', 'apology', 'confusion'],
    contextTag: 'unfortunate treasure hunting'
  },
  {
    text: "My aunt's 'famous Jell-O mold' bounced off the kitchen floor without sustaining a single scratch.",
    desired: ['toughness', 'weirdness', 'weight'],
    contextTag: 'vulcanized holiday gelatin'
  },
  {
    text: "We survived a 6-hour family charades tournament where nobody agreed on the rules.",
    desired: ['toughness', 'encouragement', 'chaos'],
    contextTag: 'full-contact pantomime survival'
  },
  {
    text: "My cousin brought a rescue ferret to Christmas dinner and it immediately stole the car keys.",
    desired: ['whimsy', 'chaos', 'mystery'],
    contextTag: 'ferret grand theft auto'
  },
  {
    text: "I'm apologizing for wrapping my brother's gift inside fourteen layers of duct tape and a cinderblock.",
    desired: ['apology', 'weight', 'toughness'],
    contextTag: 'fortified gift-wrapping prank'
  },
  {
    text: "My mother-in-law complimented my curtains and we're all suspicious it's a trap.",
    desired: ['mystery', 'caution', 'beauty'],
    contextTag: 'suspicious drapery compliment'
  },
  {
    text: "Our family piñata was built so tough by my dad that it broke three broomsticks and a shovel.",
    desired: ['toughness', 'celebration', 'utility'],
    contextTag: 'armor-plated birthday donkey'
  },
  {
    text: "My niece decided to cut her own hair five minutes before walking down the aisle as flower girl.",
    desired: ['beauty', 'comfort', 'encouragement'],
    contextTag: 'emergency avant-garde bangs'
  },
  {
    text: "My uncle fell asleep in a hammock and spun into a cocoon that required shears to open.",
    desired: ['comfort', 'utility', 'whimsy'],
    contextTag: 'human hammock chrysalis'
  },
  {
    text: "I need to congratulate my parents on 40 years of arguing over the thermostat by half a degree.",
    desired: ['romance', 'celebration', 'seriousness'],
    contextTag: 'forty-year climate-control cold war'
  },
  {
    text: "My sister-in-law brought a 'sound-healing gong' to a baby shower and woke the entire neighborhood.",
    desired: ['chaos', 'weirdness', 'apology'],
    contextTag: 'seismic percussion baby shower'
  },
  {
    text: "We accidentally locked the Thanksgiving turkey in the bathroom and the cat has the key.",
    desired: ['confusion', 'utility', 'chaos'],
    contextTag: 'hostage poultry negotiation'
  },
  {
    text: "My dad won the father-son three-legged race by simply picking up my 28-year-old brother and running.",
    desired: ['toughness', 'weight', 'celebration'],
    contextTag: 'tactical adult-son carrying'
  },
  {
    text: "I'm cheering up my grandma after she got kicked out of water aerobics for 'excessive splashing.'",
    desired: ['encouragement', 'excitement', 'happiness'],
    contextTag: 'high-wake aquatic fitness'
  },
  {
    text: "My cousin wore an inflatable T-Rex suit to a black-tie wedding and caught the bouquet.",
    desired: ['romance', 'whimsy', 'celebration'],
    contextTag: 'Jurassic bridal bouquet catch'
  },
  {
    text: "I accidentally gifted my boss the envelope meant for my weird nephew, which contained $5 and a sticker.",
    desired: ['apology', 'whimsy', 'confusion'],
    contextTag: 'five-dollar executive bonus'
  },
  {
    text: "Our family reunion tug-of-war rope snapped and launched six uncles into the hydrangea bushes.",
    desired: ['toughness', 'beauty', 'safety'],
    contextTag: 'uncle-in-hydrangeas trajectory'
  },
  {
    text: "My aunt refuses to leave our guest room until she finishes a 5,000-piece puzzle of grey clouds.",
    desired: ['seriousness', 'comfort', 'encouragement'],
    contextTag: 'five-thousand-piece overcast siege'
  },
  {
    text: "My brother tried to light the birthday candles with a blowtorch and melted the dining room chandelier.",
    desired: ['excitement', 'apology', 'safety'],
    contextTag: 'acetylene birthday wish'
  },
  {
    text: "We found out my grandpa has been secretly entering our family dog in agility trials under a fake name.",
    desired: ['mystery', 'celebration', 'excitement'],
    contextTag: 'incognito canine athletics'
  },

  // 211 - 240: Sports, Arts, Paranormal & Peak Weirdness
  {
    text: "My bowling team got disqualified because our ball turned out to be a painted coconut.",
    desired: ['whimsy', 'confusion', 'weight'],
    contextTag: 'counterfeit tropical bowling ball'
  },
  {
    text: "I'm congratulating my friend for surviving a community theater production where the stage collapsed in Act I.",
    desired: ['celebration', 'safety', 'encouragement'],
    contextTag: 'sub-floor Shakespearean debut'
  },
  {
    text: "My neighbor is convinced Bigfoot keeps borrowing his weed-whacker and returning it with a full tank.",
    desired: ['mystery', 'friendliness', 'utility'],
    contextTag: 'polite cryptid yardwork'
  },
  {
    text: "I pulled both calves while trying to look cool getting out of a beanbag chair.",
    desired: ['comfort', 'encouragement', 'seriousness'],
    contextTag: 'beanbag extraction injury'
  },
  {
    text: "My roommate's abstract sculpture was accidentally picked up by the city bulk-trash crane.",
    desired: ['beauty', 'comfort', 'apology'],
    contextTag: 'municipal art critique'
  },
  {
    text: "My uncle joined a paranormal investigation club and accidentally haunted himself in a hall of mirrors.",
    desired: ['mystery', 'confusion', 'weirdness'],
    contextTag: 'self-inflicted mirror haunting'
  },
  {
    text: "I need to thank my chiropractor after I sneezed while holding two 40-pound bags of birdseed.",
    desired: ['utility', 'weight', 'comfort'],
    contextTag: 'high-velocity birdseed sneeze'
  },
  {
    text: "My sister won an interpretive dance competition by re-enacting a printer paper jam.",
    desired: ['celebration', 'weirdness', 'beauty'],
    contextTag: 'choreographed PC Load Letter'
  },
  {
    text: "Our local amateur magician accidentally sawed the mayor's podium in half and couldn't put it back.",
    desired: ['mystery', 'apology', 'utility'],
    contextTag: 'irreversible civic illusion'
  },
  {
    text: "My best friend got trapped inside an escape room for four hours because he refused to ask for a clue.",
    desired: ['toughness', 'seriousness', 'encouragement'],
    contextTag: 'stubborn escape-room captivity'
  },
  {
    text: "I'm apologizing to my orchestra conductor for dropping my saxophone down the timpani.",
    desired: ['apology', 'chaos', 'beauty'],
    contextTag: 'woodwind-percussion collision'
  },
  {
    text: "My neighbor built a trebuchet in his backyard 'purely for composting purposes.'",
    desired: ['excitement', 'danger', 'utility'],
    contextTag: 'medieval siege composting'
  },
  {
    text: "My cousin claims he saw a UFO and his only complaint is that it double-parked.",
    desired: ['mystery', 'caution', 'seriousness'],
    contextTag: 'intergalactic parking violation'
  },
  {
    text: "I got banned from the planetarium for bringing a laser pointer and 'helping' the narrator.",
    desired: ['apology', 'excitement', 'whimsy'],
    contextTag: 'unauthorized constellation remix'
  },
  {
    text: "My wife won a staring contest against a department-store mannequin before realizing it wasn't an actor.",
    desired: ['toughness', 'confusion', 'romance'],
    contextTag: 'forty-minute fiberglass standoff'
  },
  {
    text: "Our curling team lost to four retirees who swept the ice with kitchen mops.",
    desired: ['comfort', 'utility', 'encouragement'],
    contextTag: 'senior-citizen mop curling sweep'
  },
  {
    text: "I need a bouquet that says 'I am sorry my drone crash-landed in your kiddie pool.'",
    desired: ['apology', 'safety', 'caution'],
    contextTag: 'unmanned aquatic splashdown'
  },
  {
    text: "My brother spent six months training for a marathon and accidentally registered for a 5K walk.",
    desired: ['celebration', 'confusion', 'excitement'],
    contextTag: 'over-caffeinated charity walk'
  },
  {
    text: "My aunt bought a 'cursed painting' at a flea market and now the eyes follow the roomba.",
    desired: ['mystery', 'weirdness', 'beauty'],
    contextTag: 'haunted Victorian portrait surveillance'
  },
  {
    text: "I'm cheering up a friend who got hit in the shin by a rogue shuffleboard puck on a cruise.",
    desired: ['comfort', 'safety', 'friendliness'],
    contextTag: 'high-seas shuffleboard shrapnel'
  },
  {
    text: "My dad tried to assemble a trampoline without the instructions and built a giant taco shell.",
    desired: ['utility', 'confusion', 'whimsy'],
    contextTag: 'non-Euclidean trampoline geometry'
  },
  {
    text: "Our community choir accidentally sang two different songs at the same time and got a standing ovation.",
    desired: ['celebration', 'chaos', 'beauty'],
    contextTag: 'accidental polyphonic triumph'
  },
  {
    text: "My coworker is convinced the office ficus tree is eavesdropping on his sales calls.",
    desired: ['mystery', 'caution', 'weirdness'],
    contextTag: 'corporate botanical wiretapping'
  },
  {
    text: "I'm congratulating my brother for surviving a three-day camping trip where he only packed marshmallows.",
    desired: ['toughness', 'comfort', 'celebration'],
    contextTag: 'pure-sucrose wilderness survival'
  },
  {
    text: "My neighbor's weathervane spun so fast during a gale it unscrewed itself and landed in my petunias.",
    desired: ['chaos', 'beauty', 'safety'],
    contextTag: 'airborne rooster weathervane'
  },
  {
    text: "I accidentally wore bowling shoes to a job interview and got hired because the boss admired my 'grip.'",
    desired: ['celebration', 'weirdness', 'seriousness'],
    contextTag: 'rental-footwear executive hire'
  },
  {
    text: "My sister is recovering from trying to teach her cat how to play the theremin.",
    desired: ['comfort', 'weirdness', 'danger'],
    contextTag: 'feline electronic-music rebellion'
  },
  {
    text: "We are welcoming home my uncle, who took a wrong turn at a rest stop and ended up in Manitoba.",
    desired: ['friendliness', 'confusion', 'celebration'],
    contextTag: 'accidental international road trip'
  },
  {
    text: "I need an arrangement for someone who just realized they've been watering a plastic fern for three years.",
    desired: ['encouragement', 'confusion', 'beauty'],
    contextTag: 'three years of artificial hydration'
  },
  {
    text: "My best friend just won a radio contest for a free bulldozer rental and has zero plans for Saturday.",
    desired: ['excitement', 'danger', 'chaos'],
    contextTag: 'unsupervised weekend earthmoving'
  }
];

// ---------------------------------------------------------------------------
// PROCEDURAL REQUEST GENERATOR (Thousands of extra combinations!)
// ---------------------------------------------------------------------------
const PROC_ACTORS = [
  { who: 'My step-brother', tag: 'step-brother' },
  { who: 'My dental hygienist', tag: 'dental hygienist' },
  { who: 'My landlord', tag: 'landlord' },
  { who: 'My bowling rival', tag: 'bowling rival' },
  { who: 'My favorite cousin', tag: 'cousin' },
  { who: 'Our local crossing guard', tag: 'crossing guard' },
  { who: 'My parole-officer-in-law', tag: 'in-law' },
  { who: 'My HOA treasurer', tag: 'HOA treasurer' },
  { who: 'My accordion teacher', tag: 'accordion teacher' },
  { who: 'Our neighborhood mail carrier', tag: 'mail carrier' },
  { who: 'My grandpa’s chess partner', tag: 'chess partner' },
  { who: 'My sister’s life coach', tag: 'life coach' }
];

const PROC_ACTIONS = [
  {
    act: 'challenge a mall Santa to an arm-wrestling match',
    traits: ['toughness', 'excitement'],
    context: 'mall Santa arm-wrestling'
  },
  {
    act: 'accidentally weld our patio furniture together into a sphere',
    traits: ['utility', 'confusion'],
    context: 'spherical patio welding'
  },
  {
    act: 'survive a tandem skydiving trip with a reluctant accordion player',
    traits: ['excitement', 'whimsy'],
    context: 'airborne accordion survival'
  },
  {
    act: 'get banned from the county fair for liberating the prize goldfish',
    traits: ['chaos', 'celebration'],
    context: 'carnival goldfish liberation'
  },
  {
    act: 'try to parallel park a Zamboni outside a romantic bistro',
    traits: ['romance', 'caution'],
    context: 'bistro Zamboni parking'
  },
  {
    act: 'discover a secret room in the basement filled entirely with rubber ducks',
    traits: ['mystery', 'weirdness'],
    context: 'subterranean duck vault'
  },
  {
    act: 'win a staring contest against an aggressive vending machine',
    traits: ['toughness', 'seriousness'],
    context: 'vending machine standoff'
  },
  {
    act: 'accidentally catapult a 12-pound ham through the neighbor’s gazebo',
    traits: ['weight', 'apology'],
    context: 'ballistic holiday ham'
  }
];

const PROC_TWISTS = [
  { twist: 'while wearing a rented tuxedo.', trait: 'beauty' },
  { twist: 'and now the fire department wants an apology.', trait: 'apology' },
  { twist: 'and somehow won a gold trophy for it.', trait: 'celebration' },
  { twist: 'and insists it was for neighborhood safety.', trait: 'safety' },
  { twist: 'and nobody knows how to process it emotionally.', trait: 'comfort' },
  { twist: 'while broadcasting the whole thing on a megaphone.', trait: 'encouragement' }
];

export function generateProceduralSituation() {
  const actor = PROC_ACTORS[Math.floor(Math.random() * PROC_ACTORS.length)];
  const action = PROC_ACTIONS[Math.floor(Math.random() * PROC_ACTIONS.length)];
  const twist = PROC_TWISTS[Math.floor(Math.random() * PROC_TWISTS.length)];

  const traitSet = new Set([...action.traits, twist.trait]);
  const fallbackPool = ['whimsy', 'encouragement', 'danger', 'seriousness'];
  while (traitSet.size < 3) {
    traitSet.add(fallbackPool[Math.floor(Math.random() * fallbackPool.length)]);
  }

  return {
    text: `${actor.who} decided to ${action.act} ${twist.twist}`,
    desired: Array.from(traitSet).slice(0, 3),
    contextTag: action.context
  };
}

// ---------------------------------------------------------------------------
// Customer Avatar SVG Builder (Supports dynamic facial expressions!)
// Expressions: 'neutral', 'delighted', 'emotional', 'impressed', 'confused', 'terrified', 'speechless'
// ---------------------------------------------------------------------------
export function renderCustomerSVG(customer, expression = 'neutral') {
  const { skin, shirt, hairStyle, hairColor, glasses } = customer;

  let eyesMarkup = '';
  let mouthMarkup = '';
  let extraMarkup = '';

  switch (expression) {
    case 'delighted':
      eyesMarkup = `
        <path d="M32 58 Q38 50 44 58" stroke="#2c1a10" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M56 58 Q62 50 68 58" stroke="#2c1a10" stroke-width="4" fill="none" stroke-linecap="round"/>
      `;
      mouthMarkup = `<path d="M36 74 Q50 92 64 74 Z" fill="#e63946" stroke="#2c1a10" stroke-width="3.5"/>`;
      extraMarkup = `
        <circle cx="28" cy="68" r="6" fill="#ff758f" opacity="0.7"/>
        <circle cx="72" cy="68" r="6" fill="#ff758f" opacity="0.7"/>
        <text x="12" y="28" font-size="16">✨</text>
        <text x="74" y="26" font-size="16">💖</text>
      `;
      break;

    case 'emotional':
      eyesMarkup = `
        <circle cx="38" cy="56" r="5" fill="#2c1a10"/>
        <circle cx="62" cy="56" r="5" fill="#2c1a10"/>
        <circle cx="36" cy="54" r="2" fill="#fff"/>
        <circle cx="60" cy="54" r="2" fill="#fff"/>
        <path d="M36 62 Q34 72 38 74" stroke="#4cc9f0" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M64 62 Q66 72 62 74" stroke="#4cc9f0" stroke-width="4" fill="none" stroke-linecap="round"/>
      `;
      mouthMarkup = `<path d="M40 78 Q50 72 60 78" stroke="#2c1a10" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
      break;

    case 'impressed':
      eyesMarkup = `
        <path d="M30 48 L44 50" stroke="#2c1a10" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M56 46 L70 43" stroke="#2c1a10" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="38" cy="57" r="4.5" fill="#2c1a10"/>
        <circle cx="62" cy="57" r="4.5" fill="#2c1a10"/>
      `;
      mouthMarkup = `<path d="M40 76 Q52 84 62 73" stroke="#2c1a10" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      extraMarkup = `<text x="75" y="30" font-size="16">👌</text>`;
      break;

    case 'confused':
      eyesMarkup = `
        <path d="M30 50 L44 53" stroke="#2c1a10" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M56 45 Q63 40 70 46" stroke="#2c1a10" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <circle cx="38" cy="58" r="3.5" fill="#2c1a10"/>
        <circle cx="62" cy="57" r="5.5" fill="#2c1a10"/>
      `;
      mouthMarkup = `<path d="M38 78 Q45 73 52 78 Q58 82 63 76" stroke="#2c1a10" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
      extraMarkup = `<text x="74" y="28" font-size="18" font-weight="900">❓</text>`;
      break;

    case 'terrified':
      eyesMarkup = `
        <circle cx="38" cy="56" r="8" fill="#fff" stroke="#2c1a10" stroke-width="3"/>
        <circle cx="62" cy="56" r="8" fill="#fff" stroke="#2c1a10" stroke-width="3"/>
        <circle cx="38" cy="56" r="2.5" fill="#2c1a10"/>
        <circle cx="62" cy="56" r="2.5" fill="#2c1a10"/>
      `;
      mouthMarkup = `<ellipse cx="50" cy="79" rx="10" ry="12" fill="#2c1a10"/>`;
      extraMarkup = `
        <path d="M20 42 Q16 52 22 54" stroke="#4cc9f0" stroke-width="3" fill="none"/>
        <text x="74" y="26" font-size="16">😱</text>
      `;
      break;

    case 'speechless':
      eyesMarkup = `
        <line x1="31" y1="56" x2="45" y2="56" stroke="#2c1a10" stroke-width="4" stroke-linecap="round"/>
        <line x1="55" y1="56" x2="69" y2="56" stroke="#2c1a10" stroke-width="4" stroke-linecap="round"/>
      `;
      mouthMarkup = `<line x1="42" y1="78" x2="58" y2="78" stroke="#2c1a10" stroke-width="4" stroke-linecap="round"/>`;
      extraMarkup = `<text x="70" y="28" font-size="16">💬...</text>`;
      break;

    default: // neutral
      eyesMarkup = `
        <circle cx="38" cy="56" r="4.2" fill="#2c1a10"/>
        <circle cx="62" cy="56" r="4.2" fill="#2c1a10"/>
        <circle cx="36.5" cy="54.5" r="1.4" fill="#fff"/>
        <circle cx="60.5" cy="54.5" r="1.4" fill="#fff"/>
      `;
      mouthMarkup = `<path d="M41 75 Q50 82 59 75" stroke="#2c1a10" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
  }

  let hairMarkup = '';
  if (hairStyle === 'bun') {
    hairMarkup = `
      <circle cx="50" cy="14" r="15" fill="${hairColor}" stroke="#2c1a10" stroke-width="4"/>
      <path d="M22 48 C22 20, 78 20, 78 48 C70 34, 30 34, 22 48 Z" fill="${hairColor}" stroke="#2c1a10" stroke-width="4"/>
    `;
  } else if (hairStyle === 'spiky') {
    hairMarkup = `
      <polygon points="22,46 28,20 40,32 50,12 62,32 74,18 78,46" fill="${hairColor}" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
    `;
  } else if (hairStyle === 'bob') {
    hairMarkup = `
      <path d="M18 68 C16 20, 84 20, 82 68 L74 44 L26 44 Z" fill="${hairColor}" stroke="#2c1a10" stroke-width="4" stroke-linejoin="round"/>
    `;
  } else {
    // mustache + side hair
    hairMarkup = `
      <path d="M22 46 C22 24, 78 24, 78 46 C68 32, 32 32, 22 46 Z" fill="${hairColor}" stroke="#2c1a10" stroke-width="4"/>
      <path d="M36 71 Q50 64 64 71 Q56 76 50 72 Q44 76 36 71 Z" fill="${hairColor}" stroke="#2c1a10" stroke-width="2.5"/>
    `;
  }

  const glassesMarkup = glasses
    ? `<g stroke="#2c1a10" stroke-width="3" fill="rgba(255,255,255,0.28)">
         <rect x="27" y="48" width="20" height="15" rx="4"/>
         <rect x="53" y="48" width="20" height="15" rx="4"/>
         <line x1="47" y1="55" x2="53" y2="55"/>
       </g>`
    : '';

  return `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <!-- Shoulders / Shirt -->
    <path d="M14 118 C14 88, 86 88, 86 118 Z" fill="${shirt}" stroke="#2c1a10" stroke-width="4"/>
    <!-- Neck -->
    <rect x="42" y="82" width="16" height="16" rx="6" fill="${skin}" stroke="#2c1a10" stroke-width="3.5"/>
    <!-- Ears -->
    <circle cx="21" cy="60" r="7" fill="${skin}" stroke="#2c1a10" stroke-width="3.5"/>
    <circle cx="79" cy="60" r="7" fill="${skin}" stroke="#2c1a10" stroke-width="3.5"/>
    <!-- Head -->
    <rect x="23" y="28" width="54" height="62" rx="26" fill="${skin}" stroke="#2c1a10" stroke-width="4"/>
    <!-- Nose -->
    <path d="M48 58 Q54 64 47 66" stroke="#2c1a10" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${eyesMarkup}
    ${glassesMarkup}
    ${mouthMarkup}
    ${hairMarkup}
    ${extraMarkup}
  </svg>`;
}
