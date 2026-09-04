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
  {
    id: 'get-low',
    title: 'Get on their level',
    isFree: true,
    behaviourIds: ['tantrums', 'hitting', 'biting', 'not-sharing', 'public-meltdowns', 'whining'],
    whatItIs: "Before you say anything, physically lower yourself to your toddler's height — kneel, crouch, or sit.",
    howToDoIt:
      "Come down slowly, soften your face, get near their eye line (not right in their face), then speak. A gentle hand on the shoulder if they're okay with touch.",
    whyItWorks:
      "Towering over a small, upset person reads as threat to their nervous system. Dropping to their level tells their body 'you're safe', makes you less scary, and helps them actually hear you instead of just feeling loomed over.",
  },
  {
    id: 'first-then',
    title: 'First… then…',
    isFree: true,
    behaviourIds: ['not-listening', 'transitions', 'bedtime-battles', 'defiance', 'food-refusal', 'running-off'],
    whatItIs: "A tiny two-word script that puts what's happening in order: 'First shoes, then park.'",
    howToDoIt:
      "Name the non-negotiable first, then the thing they want: 'First we wash hands, then snack.' Keep it short, say it once, and follow through calmly.",
    whyItWorks:
      "Toddlers can't hold a long chain of instructions, but they can hold 'first/then'. It makes the world predictable, gives the boring bit a purpose, and sidesteps a power struggle without a single 'no'.",
  },
  {
    id: 'countdown',
    title: 'Give a warning',
    isFree: false,
    behaviourIds: ['transitions', 'bedtime-battles', 'tantrums', 'public-meltdowns', 'not-listening'],
    whatItIs: "A heads-up before any change, so it doesn't land as a shock: 'Two more goes, then we tidy up.'",
    howToDoIt:
      "Give a warning a few minutes before a transition, then a shorter one closer to it. Keep it concrete — 'after this song' beats 'in five minutes' for a toddler with no clock in their head.",
    whyItWorks:
      "Most transition meltdowns are about the suddenness. A warning gives their slow-to-switch brain a runway, so stopping feels like their idea catching up — not a rug pulled out from under them.",
  },
  {
    id: 'redirect',
    title: 'Redirect to a yes',
    isFree: false,
    behaviourIds: ['biting', 'hitting', 'throwing', 'screaming', 'rigidity'],
    whatItIs: 'Stop the not-okay thing and immediately offer an okay version of the same urge.',
    howToDoIt:
      "Block calmly, name the limit in a few words, and give the 'yes': 'Teeth aren't for biting — you can bite this.' 'Hands aren't for hitting — you can stamp your feet.'",
    whyItWorks:
      "The impulse behind biting, hitting, or throwing is real and needs somewhere to go. Just saying 'no' leaves the energy with nowhere to land. Redirecting honours the urge, keeps everyone safe, and teaches the acceptable version instead of shaming the feeling.",
  },
  {
    id: 'narrate',
    title: 'Sportscast it',
    isFree: false,
    behaviourIds: ['not-sharing', 'throwing', 'whining', 'screaming', 'tantrums', 'tiny-meltdowns'],
    whatItIs: 'Calmly describe what you see happening and the feeling behind it, like a gentle commentator.',
    howToDoIt:
      "Put words to it without judging: 'You really wanted that toy. It made you SO cross when he took it.' No fixing, no lecture — just narrate.",
    whyItWorks:
      "Toddlers feel enormous things with no words for them. When you narrate, you hand them the vocabulary and show them they're understood. Feeling seen lowers the intensity — a named feeling is a calmer feeling.",
  },
  {
    id: 'less-words',
    title: 'Say less',
    isFree: false,
    behaviourIds: ['not-listening', 'defiance', 'food-refusal', 'whining', 'tantrums'],
    whatItIs: 'When things are heating up, cut your words right down — sometimes to one.',
    howToDoIt:
      "Swap the explanation for a word and a gesture: 'Shoes.' 'Down.' Save the reasoning for when everyone's calm. A calm face and few words, repeated, beats a paragraph.",
    whyItWorks:
      "An overwhelmed or resistant toddler can't process a stream of language — the more words you add, the more their system floods and tunes out. Fewer words means less to fight, less to drown in, and a clearer path to cooperation.",
  },
  {
    id: 'whisper',
    title: 'Drop your voice',
    isFree: false,
    behaviourIds: ['screaming', 'tantrums', 'whining', 'public-meltdowns', 'not-listening'],
    whatItIs: 'Instead of matching their volume, go quieter — even to a whisper.',
    howToDoIt:
      'As they get louder, bring your own voice down low and slow. Lean in a little. Make them lean in to hear you.',
    whyItWorks:
      "Children co-regulate off us — they borrow our nervous system to steady their own. Escalating with them pours fuel on the fire; going quiet and calm gives them something calmer to sync to, and the curiosity ('why is Mummy whispering?') interrupts the spiral.",
  },
  {
    id: 'playful-yes',
    title: 'Turn it into play',
    isFree: false,
    behaviourIds: ['defiance', 'food-refusal', 'running-off', 'transitions', 'not-listening', 'bedtime-battles'],
    whatItIs: 'Swap the battle for silliness to get cooperation without force.',
    howToDoIt:
      "Make the shoe 'talk', race them to the bathroom, let a toy 'ask' them to come, or pretend the broccoli is a tiny tree for a hungry giant. Bring lightness, not sarcasm.",
    whyItWorks:
      "Play is a toddler's first language, and it melts resistance fast. Laughter shifts them out of fight-or-flight and back into connection — and a connected toddler cooperates, because they want to be with you, not defeat you.",
  },
  {
    id: 'ride-the-wave',
    title: 'Stay close through the storm',
    isFree: false,
    behaviourIds: ['tantrums', 'tiny-meltdowns', 'public-meltdowns', 'regression', 'clinginess', 'transitions'],
    whatItIs: 'Instead of stopping the meltdown, you keep them safe and company while it moves through.',
    howToDoIt:
      "Get low, stay near, keep your voice soft and sparse — 'I'm here. I've got you.' Don't reason, fix, or flee. Let the wave crest and fall, then reconnect.",
    whyItWorks:
      "A full meltdown is a nervous system that's flipped its lid — logic is offline, so teaching can't land. Your calm presence is the anchor that lets the storm pass faster, and tells them big feelings aren't too much to be loved through.",
  },
  {
    id: 'repair',
    title: 'Repair after you snap',
    isFree: false,
    behaviourIds: ['tantrums', 'hitting', 'not-listening', 'defiance', 'regression'],
    whatItIs: "The reconnection you offer after you lose your temper — one of the most powerful things you'll ever model.",
    howToDoIt:
      "Once you're both calm: get low, own your bit simply — 'I shouted, and that was too big. I'm sorry. I love you.' No long speech, and don't make them comfort you.",
    whyItWorks:
      "You don't have to be a perfect parent — you have to be a repairing one. Repair teaches your child that love survives rupture, that everyone messes up, and how to say sorry. It's not weakness; it's the whole lesson.",
  },
  {
    id: 'prep-ahead',
    title: 'Prep before it happens',
    isFree: false,
    behaviourIds: ['public-meltdowns', 'transitions', 'running-off', 'clinginess', 'bedtime-battles', 'regression'],
    whatItIs: 'Set them (and you) up to succeed by priming what’s coming before you’re in it.',
    howToDoIt:
      "Talk it through in advance, in toddler terms: 'At the shop, you sit in the trolley and we choose two things.' Meet needs first — fed, rested — and pack a comfort item. Rehearse the plan, not the panic.",
    whyItWorks:
      "So much 'misbehaviour' is a toddler ambushed by a situation they didn't see coming. Knowing what to expect lowers anxiety, gives them a role, and heads off the overwhelm before it ever starts — prevention beats damage control.",
  },
  {
    id: 'fill-the-cup',
    title: 'Fill the cup',
    isFree: false,
    behaviourIds: ['clinginess', 'whining', 'regression', 'not-listening', 'bedtime-battles', 'defiance'],
    whatItIs: 'A short burst of undivided, one-to-one connection that tops up their sense of security.',
    howToDoIt:
      'Ten to fifteen minutes, phone down, of them leading the play or just being close and delighted in. Do it before the hard parts of the day, not only as a reward.',
    whyItWorks:
      "So much difficult behaviour is a near-empty connection cup asking to be filled. Topped up on you, a toddler feels safe enough to cooperate, separate, and cope. It's not spoiling — it's the fuel the whole day runs on.",
  },
  {
    id: 'calm-space',
    title: 'A cosy calm space',
    isFree: false,
    behaviourIds: ['tantrums', 'tiny-meltdowns', 'screaming', 'public-meltdowns', 'rigidity'],
    whatItIs: 'A comforting little corner you go to WITH your child to settle — the opposite of a time-out.',
    howToDoIt:
      "Make a soft spot with cushions, a book, a favourite toy. Offer it as a refuge, not a punishment: 'Let's go to our cosy corner and settle together.' Stay with them while they're small.",
    whyItWorks:
      "Toddlers can't calm down alone — that's a skill they learn by borrowing your calm first. A shared calm space soothes the nervous system and teaches, over time, that big feelings have a safe place to land, without the shame of being sent away.",
  },
  {
    id: 'name-the-need',
    title: 'Look under the behaviour',
    isFree: false,
    behaviourIds: ['biting', 'whining', 'screaming', 'throwing', 'tantrums', 'tiny-meltdowns'],
    whatItIs: 'Treat the behaviour as a clue, and ask what unmet need is driving it.',
    howToDoIt:
      'Run a quick check: hungry, tired, over-stimulated, under-connected, unwell, or needing to move? Meet the need you find, rather than only managing the behaviour on the surface.',
    whyItWorks:
      "Behaviour is communication. The tantrum, the whine, the hitting are the smoke — the need is the fire. Solve the need and the behaviour usually dissolves, because you've answered what your toddler was actually trying to tell you.",
  },
  {
    id: 'offer-control',
    title: 'Hand them some control',
    isFree: false,
    behaviourIds: ['defiance', 'food-refusal', 'running-off', 'not-listening', 'rigidity', 'transitions'],
    whatItIs: 'Give your toddler real, safe power inside your limit, so their need for autonomy has somewhere to go.',
    howToDoIt:
      "Offer a genuine job or a small choice you're happy with either way: 'Do you want to carry the bananas or the bread?' 'You be in charge of the door.' Then let them actually do it.",
    whyItWorks:
      "So much defiance is a toddler starved for a say in their own life. Handing them control where it's safe satisfies that drive, so they don't have to grab it by refusing everything. A toddler with a job is a toddler on your team.",
  },
];
