import Constants from 'expo-constants';
import { Platform } from 'react-native';

// RevenueCat project config. Set EXPO_PUBLIC_REVENUECAT_API_KEY_IOS /
// EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID (see README "Configuring
// RevenueCat + Codemagic") once your RevenueCat project exists — Metro
// inlines EXPO_PUBLIC_* env vars at build time, so they must be set
// wherever the app is built (Codemagic env vars/groups, or a local .env).
// Until then every entitlement check below falls back to a local dev-only
// unlock so the paywall UI can be built and tested in a dev build with no
// store config at all.
export const REVENUECAT_API_KEYS = {
  ios: process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_IOS ?? '',
  android: process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID ?? '',
};

export const ENTITLEMENT_ID = 'unlock_everything';
export const OFFERING_ID = 'default';

export function getRevenueCatApiKey(): string | undefined {
  const key = Platform.select({ ios: REVENUECAT_API_KEYS.ios, android: REVENUECAT_API_KEYS.android });
  return key && key.length > 0 ? key : undefined;
}

// RevenueCat has no native module on web, and IAP requires a custom dev
// client (it isn't available in Expo Go) — both fall back to dev mode.
export function isRevenueCatAvailable(): boolean {
  if (Platform.OS === 'web') return false;
  if (Constants.appOwnership === 'expo') return false;
  return getRevenueCatApiKey() !== undefined;
}
