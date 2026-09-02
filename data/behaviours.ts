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
];
