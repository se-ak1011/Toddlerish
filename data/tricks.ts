import type { Trick } from './types';

// Add new tricks here. Every `behaviourIds` entry should have a matching
// `trickIds` entry on that behaviour in behaviours.ts so detail screens can
// cross-link both ways.
export const tricks: Trick[] = [
  {
    id: 'regulate-you',
    title: "Regulate you first (you're the thermostat)",
    isFree: true,
    behaviourIds: ['tantrums', 'hitting'],
    whatItIs:
      "Your calm is contagious — and so is your stress. A dysregulated toddler can't be calmed by a dysregulated adult.",
    howToDoIt:
      "Before you do anything about them — one breath, drop your shoulders, lower your voice. Even a whispered 'okay, okay' to yourself. Get your own system down a notch, then turn to them. Too far gone yourself? 'I need a second' and stepping back is fine — a safe toddler crying for a minute while you steady yourself is okay.",
    whyItWorks:
      "Toddlers co-regulate — they borrow your calm to build their own, because they can't self-soothe yet. Regulate you, and you've handed them the thing to match.",
  },
  {
    id: 'name-feeling',
    title: 'Name the feeling',
    isFree: true,
    behaviourIds: ['tantrums', 'tiny-meltdowns', 'hitting'],
    whatItIs:
      'Putting words to what they feel — out loud, for them — before they have the words themselves.',
    howToDoIt:
      "Say what you see, simply: 'You're SO cross the banana broke.' 'That's really disappointing.' Don't fix, don't explain, don't lecture. Just name it, warmly.",
    whyItWorks:
      "A feeling that's named starts to settle — even in a toddler. It tells their brain 'this big thing has a shape, and someone gets it,' which takes the edge off the flood. It also builds the emotional vocabulary they'll self-regulate with later.",
  },
  {
    id: 'two-yes',
    title: 'Two-yes choice',
    isFree: true,
    behaviourIds: ['saying-no', 'not-listening'],
    whatItIs:
      'A choice where both options are a yes for you — they feel powerful, you still get the outcome.',
    howToDoIt:
      "Instead of 'put your shoes on' (a demand, ripe for NO): 'Shoes on the stairs, or on the mat?' 'Walk to the bath, or hop like a frog?' Both answers get you there. Keep it to two — more overwhelms them.",
    whyItWorks:
      "Toddlers are desperate for autonomy. A demand trips the 'NO' reflex; a choice hands them control without a battle. You sidestep the power struggle instead of stepping into it.",
  },
  {
    id: 'connect-correct',
    title: 'Connect before you correct',
    isFree: false,
    behaviourIds: ['not-listening', 'saying-no', 'hitting'],
    whatItIs:
      'A few seconds of warmth before you ask for anything or address a behaviour.',
    howToDoIt:
      "Down to their level, eye contact, a hand on the shoulder or 'hey, I see you building that — it's brilliant' — then the ask. Connection first, then correction.",
    whyItWorks:
      'A connected toddler cooperates; a told-off toddler digs in. Correction on a disconnected child reads as a threat and triggers resistance. Two seconds of connection flips the whole nervous-system response. This is the heart of it: a regulated, connected toddler is a cooperating toddler.',
  },
  {
    id: 'validate-hold',
    title: 'Validate the want, hold the limit',
    isFree: false,
    behaviourIds: ['tantrums', 'tiny-meltdowns', 'hitting'],
    whatItIs:
      'Fully acknowledging what they want, while calmly keeping the boundary. Both at once.',
    howToDoIt:
      "'You really, really want the biscuit. I know. It's not biscuit time — and I'm not changing my mind. I know that's so hard.' Warm on the feeling, firm on the line. No arguing, no over-explaining, no caving — and no going cold either.",
    whyItWorks:
      "Toddlers don't melt down because you said no — they melt down because they feel unheard AND blocked. Validating the want removes half the distress, even when the answer stays no. Caving teaches them meltdowns work; going cold teaches them feelings are unsafe. Warm + firm threads both.",
  },
];
