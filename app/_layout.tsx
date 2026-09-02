import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { ShantellSans_500Medium } from '@expo-google-fonts/shantell-sans';

import { EntitlementProvider } from '@/hooks/useEntitlement';
import { OnboardingProvider, useOnboarding } from '@/hooks/useOnboarding';
import { SavedProvider } from '@/hooks/useSaved';
import { colors } from '@/theme';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ShantellSans_500Medium,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <EntitlementProvider>
      <SavedProvider>
        <OnboardingProvider>
          <RootLayoutNav />
        </OnboardingProvider>
      </SavedProvider>
    </EntitlementProvider>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  const { isLoading, isComplete } = useOnboarding();

  useEffect(() => {
    if (!isLoading && !isComplete) {
      router.push('/onboarding');
    }
    // Only ever fires once, right after onboarding state finishes loading.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.text,
        headerTitleStyle: { color: colors.text },
        headerBackTitle: '',
        contentStyle: { backgroundColor: colors.bg },
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="behaviour/[id]" options={{ title: '' }} />
      <Stack.Screen name="trick/[id]" options={{ title: '' }} />
      <Stack.Screen name="paywall" options={{ presentation: 'modal', headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ presentation: 'modal', headerShown: false }} />
    </Stack>
  );
}
