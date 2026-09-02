export type PoseKey =
  | 'wave'
  | 'eat'
  | 'blocks'
  | 'bunny'
  | 'crawl'
  | 'point'
  | 'sippy'
  | 'teddy'
  | 'calm';

/**
 * Picks Elena's pose for a behaviour detail screen from its tags:
 * food/eating -> eat, milestone/development -> blocks, otherwise a comfort
 * pose (bunny) for feelings/overwhelm/hard-behaviour entries, falling back
 * to calm when nothing matches.
 */
export function poseForBehaviour(tags: string[]): PoseKey {
  const lower = tags.map((t) => t.toLowerCase());
  if (lower.some((t) => t.includes('food') || t.includes('eating'))) return 'eat';
  if (lower.some((t) => t.includes('milestone') || t.includes('development'))) return 'blocks';
  if (
    lower.some(
      (t) =>
        t.includes('feeling') ||
        t.includes('overwhelm') ||
        t.includes('impulse') ||
        t.includes('rigidity') ||
        t.includes('attention') ||
        t.includes('executive function')
    )
  ) {
    return 'bunny';
  }
  return 'calm';
}
