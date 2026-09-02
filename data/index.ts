import { behaviours } from './behaviours';
import { tricks } from './tricks';
import type { Behaviour, Trick } from './types';

export { behaviours, tricks };
export type { Behaviour, Trick };

const behavioursById = new Map(behaviours.map((b) => [b.id, b]));
const tricksById = new Map(tricks.map((t) => [t.id, t]));

export function getBehaviour(id: string): Behaviour | undefined {
  return behavioursById.get(id);
}

export function getTrick(id: string): Trick | undefined {
  return tricksById.get(id);
}

export function getTricksForBehaviour(behaviour: Behaviour): Trick[] {
  return behaviour.trickIds
    .map((id) => tricksById.get(id))
    .filter((t): t is Trick => t !== undefined);
}

export function getBehavioursForTrick(trick: Trick): Behaviour[] {
  return trick.behaviourIds
    .map((id) => behavioursById.get(id))
    .filter((b): b is Behaviour => b !== undefined);
}

function matches(haystack: string[], query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return haystack.some((h) => h.toLowerCase().includes(q));
}

export function searchBehaviours(query: string): Behaviour[] {
  return behaviours.filter((b) => matches([b.title, ...b.tags], query));
}

export function searchTricks(query: string): Trick[] {
  return tricks.filter((t) => matches([t.title], query));
}
