import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Mascot } from '@/components/Mascot';
import { useEntitlement } from '@/hooks/useEntitlement';
import { colors, spacing, type } from '@/theme';

const PERKS = [
  'Every behaviour, unlocked',
  'Every gentle-parenting trick, unlocked',
  'One payment — yours for good, no subscription',
];

export default function PaywallScreen() {
  const router = useRouter();
  const { isUnlocked, purchase, restore, isStoreConfigured } = useEntitlement();
  const [isBusy, setIsBusy] = useState(false);

  if (isUnlocked) {
    router.back();
    return null;
  }

  const handlePurchase = async () => {
    setIsBusy(true);
    try {
      await purchase();
      router.back();
    } catch (error) {
      Alert.alert('Something went wrong', error instanceof Error ? error.message : String(error));
    } finally {
      setIsBusy(false);
    }
  };

  const handleRestore = async () => {
    setIsBusy(true);
    try {
      await restore();
    } catch (error) {
      Alert.alert('Restore failed', error instanceof Error ? error.message : String(error));
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.top}>
        <Mascot pose="teddy" size={96} />
        <Text style={styles.title}>Unlock everything</Text>
        <Text style={styles.subtitle}>
          A one-time payment gives you every behaviour and every trick, forever.
        </Text>
      </View>

      <Card style={styles.perks}>
        {PERKS.map((perk) => (
          <Text key={perk} style={styles.perk}>
            · {perk}
          </Text>
        ))}
      </Card>

      {!isStoreConfigured ? (
        <Text style={styles.devNote}>
          Dev mode: no store product configured yet, so this unlocks locally on this device.
        </Text>
      ) : null}

      <Button label="Unlock everything" onPress={handlePurchase} disabled={isBusy} />
      <Button label="Restore purchase" onPress={handleRestore} variant="secondary" disabled={isBusy} />
      <Button label="Not right now" onPress={() => router.back()} variant="secondary" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: spacing.xl,
    gap: spacing.lg,
    alignItems: 'stretch',
  },
  top: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  title: {
    ...type.display,
    color: colors.text,
    textAlign: 'center',
  },
  subtitle: {
    ...type.body,
    color: colors.textMuted,
    textAlign: 'center',
  },
  perks: {
    gap: spacing.xs,
  },
  perk: {
    ...type.body,
    color: colors.text,
  },
  devNote: {
    ...type.small,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
