import { createContext, useCallback, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';

import { readJSON, StorageKeys, writeJSON } from '@/lib/storage';

type SavedContextValue = {
  savedBehaviourIds: string[];
  savedTrickIds: string[];
  isBehaviourSaved: (id: string) => boolean;
  isTrickSaved: (id: string) => boolean;
  toggleBehaviourSaved: (id: string) => void;
  toggleTrickSaved: (id: string) => void;
};

const SavedContext = createContext<SavedContextValue | null>(null);

export function SavedProvider({ children }: PropsWithChildren) {
  const [savedBehaviourIds, setSavedBehaviourIds] = useState<string[]>([]);
  const [savedTrickIds, setSavedTrickIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const [behaviourIds, trickIds] = await Promise.all([
        readJSON<string[]>(StorageKeys.savedBehaviourIds, []),
        readJSON<string[]>(StorageKeys.savedTrickIds, []),
      ]);
      setSavedBehaviourIds(behaviourIds);
      setSavedTrickIds(trickIds);
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (loaded) void writeJSON(StorageKeys.savedBehaviourIds, savedBehaviourIds);
  }, [loaded, savedBehaviourIds]);

  useEffect(() => {
    if (loaded) void writeJSON(StorageKeys.savedTrickIds, savedTrickIds);
  }, [loaded, savedTrickIds]);

  const toggleBehaviourSaved = useCallback((id: string) => {
    setSavedBehaviourIds((prev) =>
      prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id]
    );
  }, []);

  const toggleTrickSaved = useCallback((id: string) => {
    setSavedTrickIds((prev) =>
      prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id]
    );
  }, []);

  const value = useMemo<SavedContextValue>(
    () => ({
      savedBehaviourIds,
      savedTrickIds,
      isBehaviourSaved: (id: string) => savedBehaviourIds.includes(id),
      isTrickSaved: (id: string) => savedTrickIds.includes(id),
      toggleBehaviourSaved,
      toggleTrickSaved,
    }),
    [savedBehaviourIds, savedTrickIds, toggleBehaviourSaved, toggleTrickSaved]
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSaved(): SavedContextValue {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error('useSaved must be used within a SavedProvider');
  return ctx;
}
