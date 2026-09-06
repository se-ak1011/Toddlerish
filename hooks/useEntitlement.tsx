import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';

import { ENTITLEMENT_ID, OFFERING_ID, getRevenueCatApiKey, isRevenueCatAvailable } from '@/lib/purchases';
import { readJSON, StorageKeys, writeJSON } from '@/lib/storage';

type EntitlementContextValue = {
  isUnlocked: boolean;
  isLoading: boolean;
  /** False until RevenueCat + a real store product are configured — purchase() uses a local dev-only unlock instead. */
  isStoreConfigured: boolean;
  purchase: () => Promise<void>;
  restore: () => Promise<void>;
};

const EntitlementContext = createContext<EntitlementContextValue | null>(null);

export function EntitlementProvider({ children }: PropsWithChildren) {
  const storeConfigured = useMemo(() => isRevenueCatAvailable(), []);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!storeConfigured) {
        const devUnlocked = await readJSON(StorageKeys.devUnlocked, false);
        if (!cancelled) {
          setIsUnlocked(devUnlocked);
          setIsLoading(false);
        }
        return;
      }

      try {
        const Purchases = (await import('react-native-purchases')).default;
        Purchases.configure({ apiKey: getRevenueCatApiKey()! });
        const info = await Purchases.getCustomerInfo();
        if (!cancelled) {
          setIsUnlocked(Boolean(info.entitlements.active[ENTITLEMENT_ID]));
          setIsLoading(false);
        }
        Purchases.addCustomerInfoUpdateListener((updated) => {
          setIsUnlocked(Boolean(updated.entitlements.active[ENTITLEMENT_ID]));
        });
      } catch (error) {
        console.warn('RevenueCat setup failed, falling back to dev unlock', error);
        const devUnlocked = await readJSON(StorageKeys.devUnlocked, false);
        if (!cancelled) {
          setIsUnlocked(devUnlocked);
          setIsLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [storeConfigured]);

  const value = useMemo<EntitlementContextValue>(
    () => ({
      isUnlocked,
      isLoading,
      isStoreConfigured: storeConfigured,
      purchase: async () => {
        if (!storeConfigured) {
          await writeJSON(StorageKeys.devUnlocked, true);
          setIsUnlocked(true);
          return;
        }
        const Purchases = (await import('react-native-purchases')).default;
        const offerings = await Purchases.getOfferings();
        const offering = offerings.all[OFFERING_ID] ?? offerings.current;
        const pkg = offering?.availablePackages[0];
        if (!pkg) throw new Error(`No RevenueCat package available in the "${OFFERING_ID}" offering — check your Offerings config.`);
        const { customerInfo } = await Purchases.purchasePackage(pkg);
        setIsUnlocked(Boolean(customerInfo.entitlements.active[ENTITLEMENT_ID]));
      },
      restore: async () => {
        if (!storeConfigured) {
          const devUnlocked = await readJSON(StorageKeys.devUnlocked, false);
          setIsUnlocked(devUnlocked);
          return;
        }
        const Purchases = (await import('react-native-purchases')).default;
        const info = await Purchases.restorePurchases();
        setIsUnlocked(Boolean(info.entitlements.active[ENTITLEMENT_ID]));
      },
    }),
    [isUnlocked, isLoading, storeConfigured]
  );

  return <EntitlementContext.Provider value={value}>{children}</EntitlementContext.Provider>;
}

export function useEntitlement(): EntitlementContextValue {
  const ctx = useContext(EntitlementContext);
  if (!ctx) throw new Error('useEntitlement must be used within an EntitlementProvider');
  return ctx;
}
