import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';

import { readJSON, StorageKeys, writeJSON } from '@/lib/storage';

type OnboardingContextValue = {
  isLoading: boolean;
  isComplete: boolean;
  childAge: string | null;
  setChildAge: (age: string) => Promise<void>;
  completeOnboarding: () => Promise<void>;
};

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [childAge, setChildAgeState] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const [complete, age] = await Promise.all([
        readJSON<boolean>(StorageKeys.onboardingComplete, false),
        readJSON<string | null>(StorageKeys.childAge, null),
      ]);
      setIsComplete(complete);
      setChildAgeState(age);
      setIsLoading(false);
    })();
  }, []);

  const value = useMemo<OnboardingContextValue>(
    () => ({
      isLoading,
      isComplete,
      childAge,
      setChildAge: async (age: string) => {
        await writeJSON(StorageKeys.childAge, age);
        setChildAgeState(age);
      },
      completeOnboarding: async () => {
        await writeJSON(StorageKeys.onboardingComplete, true);
        setIsComplete(true);
      },
    }),
    [isLoading, isComplete, childAge]
  );

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding(): OnboardingContextValue {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error('useOnboarding must be used within an OnboardingProvider');
  return ctx;
}
