import type { Behaviour } from './types';

// Add new behaviours here. Every `trickIds` entry should have a matching
// `behaviourIds` entry on that trick in tricks.ts so detail screens can
// cross-link both ways.
export const behaviours: Behaviour[] = [
  {
    id: 'tantrums',
    title: 'Tantrums & meltdowns',
    ageRange: '1–3',
    isFree: true,
    tags: ['feelings', 'overwhelm'],
    trickIds: ['regulate-you', 'name-feeling', 'validate-hold'],
    whyItHappens:
      "A tantrum isn't bad behaviour — it's an overwhelmed brain with no wiring yet to handle big feelings. The 'calm down and reason' part of a toddler's brain is years from finished, so when a feeling gets too big it floods the whole system. They're not giving you a hard time — they're having one. Nothing's gone wrong.",
    whenToSeekHelp:
      'If meltdowns stay extreme well past 5, or come with other worries about development, chat to your GP or health visitor. For a toddler, though? Textbook.',
  },
  {
    id: 'hitting',
    title: 'Hitting',
    ageRange: '1–3',
    isFree: true,
    tags: ['big feelings', 'impulse'],
    trickIds: ['regulate-you', 'name-feeling', 'validate-hold'],
    whyItHappens:
      "Hitting is communication before words. A big feeling — frustration, overwhelm, even excitement — needs somewhere to go, and impulse control is barely switched on yet. They genuinely can't reliably stop the hand before it moves. It's not aggression, and not a character flaw. It's a stage.",
    whenToSeekHelp:
      "If it's constant, escalating well past preschool, or paired with other concerns — flag it. Otherwise: normal, teachable, temporary.",
  },
  {
    id: 'saying-no',
    title: "Saying 'no' to everything",
    ageRange: '1–3',
    isFree: true,
    tags: ['independence', 'autonomy'],
    trickIds: ['two-yes', 'connect-correct'],
    whyItHappens:
      "'No!' is your toddler discovering they're a separate person with their own will. It's not defiance or disrespect — it's the first flex of independence, which is a milestone, not a rebellion. They're not pushing you away; they're finding out they exist. Annoying? Yes. Healthy? Also yes.",
    whenToSeekHelp: "This one's just development. Ride it out.",
  },
  {
    id: 'tiny-meltdowns',
    title: 'Meltdowns over tiny things (wrong cup, broken banana)',
    ageRange: '1–3',
    isFree: false,
    tags: ['feelings', 'rigidity'],
    trickIds: ['name-feeling', 'validate-hold'],
    whyItHappens:
      "To you, the banana broke. To them, something they expected turned out different, and their tiny nervous system has no framework for 'it's fine, it's still a banana.' Toddlers live in the moment with zero perspective and zero regulation, so a broken banana genuinely feels like a small catastrophe. Not dramatic, not manipulative — their brain hasn't built 'this is minor' yet.",
    whenToSeekHelp: 'The most textbook toddler thing there is. No flag needed.',
  },
  {
    id: 'not-listening',
    title: "'Not listening' / ignoring you",
    ageRange: '1–3',
    isFree: false,
    tags: ['attention', 'executive function'],
    trickIds: ['connect-correct'],
    whyItHappens:
      "Two things. When they're absorbed in something, 'put your shoes on' genuinely doesn't land — shifting attention on demand is a skill that isn't built yet. And sometimes they did hear and just can't stop the fun to comply. Neither is disrespect. The plan-and-do part of their brain is a construction site.",
    whenToSeekHelp:
      'If they never respond to their name or seem not to hear you, a hearing check + GP chat is sensible. Otherwise: normal.',
  },
  {
    id: 'biting',
    title: 'Biting',
    ageRange: '12 months – 3 years',
    isFree: true,
    tags: ['aggression', 'physical'],
    trickIds: ['regulate-you', 'redirect', 'name-the-need', 'name-feeling', 'get-low'],
    whyItHappens:
      "Biting looks shocking, but for a toddler it's rarely about aggression. Little ones bite when they're teething, over-excited, frustrated, overtired, or completely out of words for a very big feeling. The part of the brain that stops an impulse is still years from finished, so in the moment the body acts before the brain can catch it. They're not being cruel — they've hit a wall, and their mouth got there first.",
    whenToSeekHelp:
      "Biting that's constant, escalating past age 3–4, or paired with very little speech and eye contact is worth a relaxed chat with your health visitor or GP — not because something's wrong, but so you feel supported.",
  },
  {
    id: 'throwing',
    title: 'Throwing things',
    ageRange: '12 months – 3 years',
    isFree: false,
    tags: ['physical', 'exploration'],
    trickIds: ['redirect', 'narrate', 'regulate-you', 'name-the-need', 'offer-control'],
    whyItHappens:
      "Throwing is a toddler doing science. They're learning cause and effect — I let go, it falls, it makes a sound, you react. It's also a brilliant release valve for a body full of energy or frustration. When it's food off the highchair, they're usually done eating, curious, or both. It can feel defiant, but it's almost always exploration or overflow, not disrespect.",
    whenToSeekHelp:
      "If throwing is consistently aimed to hurt, you can never find a trigger, or it comes alongside other worries, mention it to your health visitor.",
  },
  {
    id: 'not-sharing',
    title: 'Not sharing',
    ageRange: '18 months – 3 years',
    isFree: false,
    tags: ['social', 'developmental'],
    trickIds: ['narrate', 'name-feeling', 'get-low', 'first-then', 'validate-hold'],
    whyItHappens:
      "Here's the secret nobody tells you: toddlers aren't developmentally able to share yet, and that's completely normal. Real sharing needs a sense of 'later', of another person's feelings, and of time — none of which is fully online in a toddler brain. To them, 'mine' isn't greed; it's how they're learning where they end and the world begins. Grabbing and guarding is a stage, not a character flaw.",
    whenToSeekHelp:
      "Sharing genuinely lands for most children between 3 and 4. If you're worried about how your child plays alongside others, your health visitor can reassure you.",
  },
  {
    id: 'clinginess',
    title: 'Clinginess & separation anxiety',
    ageRange: '8 months – 3 years',
    isFree: true,
    tags: ['emotional', 'attachment'],
    trickIds: ['fill-the-cup', 'ride-the-wave', 'prep-ahead', 'regulate-you', 'first-then'],
    whyItHappens:
      "Clinginess isn't a step backwards — it's a sign the bond is working. Your toddler has learned you're their safe base, and when they're tired, unwell, or facing something new, they reach for that base hard. Separation anxiety often flares around big changes: a new setting, a new sibling, a developmental leap. They're not being manipulative or 'babyish' — they're topping up on safety so they can go back out and explore.",
    whenToSeekHelp:
      "If separation distress is extreme, lasts long past drop-off, or stops your child functioning day to day, your health visitor or GP can help.",
  },
  {
    id: 'screaming',
    title: 'Screaming & screeching',
    ageRange: '12 months – 2.5 years',
    isFree: false,
    tags: ['communication', 'sensory'],
    trickIds: ['whisper', 'name-feeling', 'narrate', 'name-the-need', 'redirect'],
    whyItHappens:
      "That ear-splitting screech is often pure discovery — they've found a new sound and they're testing what it does. Other times it's the only tool they have for a feeling too big for words: excitement, frustration, or 'notice me'. Toddlers live at full volume because their impulse control and their vocabulary are both still under construction. It's loud, but it's communication, not misbehaviour.",
    whenToSeekHelp:
      "Persistent screaming with no obvious trigger, or that seems to signal overwhelm from noise and busy places, is worth mentioning to your health visitor.",
  },
  {
    id: 'food-refusal',
    title: 'Picky eating & food refusal',
    ageRange: '1 – 4 years',
    isFree: false,
    tags: ['eating', 'autonomy'],
    trickIds: ['offer-control', 'two-yes', 'less-words', 'regulate-you', 'playful-yes'],
    whyItHappens:
      "Food refusal spikes in the toddler years for good reasons. Growth slows after age one, so they genuinely need less. Saying 'no' to food is also one of the few powerful choices a toddler gets to make — it's autonomy, not war. Add a natural wariness of new foods (an ancient safety instinct) and mealtimes get bumpy. Most 'fussy' toddlers are doing something completely typical.",
    whenToSeekHelp:
      "If your child is losing weight, dropping whole food groups, gagging or choking often, or you're anxious about their intake, speak to your GP or health visitor.",
  },
  {
    id: 'bedtime-battles',
    title: 'Bedtime resistance',
    ageRange: '18 months – 4 years',
    isFree: false,
    tags: ['sleep', 'transitions'],
    trickIds: ['first-then', 'countdown', 'fill-the-cup', 'prep-ahead', 'regulate-you'],
    whyItHappens:
      "Bedtime asks a toddler to do the hardest thing: stop, separate from you, and let go of a fun day. An overtired or over-stimulated brain finds it harder to settle, not easier — so the 'second wind' and the stalling ('one more story', 'I need a wee') are a wired nervous system, not a child being difficult. Predictability and connection are what bring the system down.",
    whenToSeekHelp:
      "Ongoing severe bedtime distress, or sleep that's affecting the whole family's wellbeing, is worth raising with your health visitor.",
  },
  {
    id: 'night-waking',
    title: 'Night waking & early waking',
    ageRange: '1 – 4 years',
    isFree: false,
    tags: ['sleep'],
    trickIds: ['fill-the-cup', 'regulate-you', 'prep-ahead', 'ride-the-wave', 'first-then'],
    whyItHappens:
      "Waking in the night is biologically normal — we all surface between sleep cycles; toddlers just need help getting back down. It can ramp up with teething, illness, a developmental leap, a scary dream, or any big change in the day. It isn't a habit they're choosing, and it isn't something you've broken. Their sleep is still maturing.",
    whenToSeekHelp:
      "If night waking comes with snoring or breathing pauses, pain, or it's exhausting you to the point of not coping, please talk to your GP.",
  },
  {
    id: 'running-off',
    title: 'Running off',
    ageRange: '14 months – 3 years',
    isFree: false,
    tags: ['safety', 'impulse'],
    trickIds: ['prep-ahead', 'first-then', 'playful-yes', 'offer-control', 'get-low'],
    whyItHappens:
      "Bolting is thrilling for a toddler and terrifying for you. They're driven to explore, they have almost no sense of danger yet, and impulse control is barely switched on — so the urge to run simply wins. It isn't disobedience; it's a brand-new body discovering it can move fast, with no brakes fitted yet. Your job is the brakes, for now.",
    whenToSeekHelp:
      "If running off seems to come with no awareness of you at all, or alongside other developmental worries, mention it to your health visitor.",
  },
  {
    id: 'public-meltdowns',
    title: 'Meltdowns in public',
    ageRange: '1 – 4 years',
    isFree: false,
    tags: ['overwhelm', 'sensory'],
    trickIds: ['regulate-you', 'get-low', 'ride-the-wave', 'prep-ahead', 'name-feeling'],
    whyItHappens:
      "Public meltdowns feel worse because of the audience — but for your toddler, the shop or café is the actual problem: bright, loud, busy, full of things they want and can't have. Their overloaded system tips over, and the fact that strangers are watching means nothing to them. They're not embarrassing you on purpose — they're overwhelmed, and you're the safe person they fall apart in front of.",
    whenToSeekHelp:
      "If busy, bright places reliably cause extreme distress, it's worth a chat with your health visitor about sensory needs.",
  },
  {
    id: 'whining',
    title: 'Whining',
    ageRange: '18 months – 4 years',
    isFree: false,
    tags: ['communication', 'connection'],
    trickIds: ['name-the-need', 'fill-the-cup', 'narrate', 'get-low', 'less-words'],
    whyItHappens:
      "Whining grates for a reason — it's built to get your attention, and it works. Usually it means a cup that's running low: your toddler is tired, hungry, overstimulated, or short on connection, and whining is the sound of a need they can't yet name. It's not them trying to wind you up. It's a small person asking for help in the only register they've got left.",
    whenToSeekHelp: 'Whining is rarely a concern on its own; raise it only if it comes with worries about mood or development.',
  },
  {
    id: 'defiance',
    title: 'Defiance & doing the opposite',
    ageRange: '18 months – 4 years',
    isFree: false,
    tags: ['autonomy', 'limits'],
    trickIds: ['offer-control', 'two-yes', 'connect-correct', 'playful-yes', 'less-words'],
    whyItHappens:
      "The moment you say 'don't', they do — and it can feel personal. It isn't. Toddlers are wired to test where the edges are; it's how they build a sense of self and learn the world is predictable. Saying 'no' and doing the opposite is them discovering they're a separate person with their own will. It's a developmental job, not a war for control — even though it feels exactly like one at 8am.",
    whenToSeekHelp:
      "If defiance is extreme, aggressive, and constant across every single setting, your health visitor or GP can offer support.",
  },
  {
    id: 'rigidity',
    title: "Rigidity ('it has to be just so')",
    ageRange: '18 months – 3.5 years',
    isFree: false,
    tags: ['control', 'regulation'],
    trickIds: ['offer-control', 'narrate', 'validate-hold', 'prep-ahead', 'two-yes'],
    whyItHappens:
      "The blue cup, the same book, the door you must NOT close — toddlers can melt down when tiny things aren't exactly right. In a world they can't control, sameness feels safe, and predictability soothes a developing nervous system. This need for things 'just so' is often loudest around big changes or stress. It's not fussiness or manipulation — it's a small person reaching for control where they can find it.",
    whenToSeekHelp:
      "If rigidity is intense, rules their whole day, or comes with other developmental concerns, a chat with your health visitor can help.",
  },
  {
    id: 'regression',
    title: 'Regression (going backwards)',
    ageRange: '18 months – 4 years',
    isFree: false,
    tags: ['change', 'attachment'],
    trickIds: ['fill-the-cup', 'ride-the-wave', 'name-feeling', 'regulate-you', 'prep-ahead'],
    whyItHappens:
      "Suddenly the potty-trained, independent toddler wants a nappy, baby talk, and to be carried everywhere. Regression almost always follows a big change — a new sibling, starting nursery, a house move, tension at home. Going backwards is how a toddler says 'this is a lot, I need to feel little and safe again'. It's not lost progress. It's a detour back to base to refuel, and it passes.",
    whenToSeekHelp:
      "If regression is severe, lasts many weeks, or comes with big mood or behaviour changes, check in with your health visitor or GP.",
  },
  {
    id: 'transitions',
    title: 'Meltdowns over transitions',
    ageRange: '1 – 4 years',
    isFree: false,
    tags: ['transitions', 'regulation'],
    trickIds: ['countdown', 'first-then', 'playful-yes', 'prep-ahead', 'offer-control'],
    whyItHappens:
      "Leaving the park, turning off the telly, coming to the table — transitions are a classic meltdown trigger. Toddlers live fully in the now, so being pulled out of something they're enjoying feels genuinely abrupt and unfair. Stopping also means switching gears, which their brain finds slow and hard. The meltdown isn't defiance — it's the jolt of a little nervous system asked to change track with no runway.",
    whenToSeekHelp:
      "Transition struggles are very normal; only raise them if they're extreme across every change and paired with other worries.",
  },
];
