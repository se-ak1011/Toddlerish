import { useEffect } from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Card } from '@/components/Card';
import { Chip } from '@/components/Chip';
import { ListRow } from '@/components/ListRow';
import { Mascot } from '@/components/Mascot';
import { getBehaviour, getTricksForBehaviour } from '@/data';
import { useEntitlement } from '@/hooks/useEntitlement';
import { useSaved } from '@/hooks/useSaved';
import { poseForBehaviour } from '@/lib/mascot';
import { colors, fonts, radii, spacing, type } from '@/theme';

export default function BehaviourDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { isUnlocked } = useEntitlement();
  const { isBehaviourSaved, toggleBehaviourSaved } = useSaved();

  const behaviour = getBehaviour(id);
  const locked = behaviour ? !behaviour.isFree && !isUnlocked : false;

  useEffect(() => {
    if (!behaviour || locked) router.replace('/paywall');
  }, [behaviour, locked, router]);

  if (!behaviour || locked) return null;

  const tricks = getTricksForBehaviour(behaviour);
  const saved = isBehaviourSaved(behaviour.id);

  const openTrick = (trickId: string, trickIsFree: boolean) => {
    if (!trickIsFree && !isUnlocked) {
      router.push('/paywall');
      return;
    }
    router.push({ pathname: '/trick/[id]', params: { id: trickId } });
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + spacing.xxl }]}>
      <Stack.Screen
        options={{
          title: behaviour.title,
          headerRight: () => (
            <Pressable onPress={() => toggleBehaviourSaved(behaviour.id)} hitSlop={12}>
              <SymbolView
                name={{
                  ios: saved ? 'heart.fill' : 'heart',
                  android: saved ? 'favorite' : 'favorite_border',
                  web: saved ? 'favorite' : 'favorite_border',
                }}
                tintColor={colors.primary}
                size={22}
              />
            </Pressable>
          ),
        }}
      />

      <View style={styles.top}>
        <Mascot pose={poseForBehaviour(behaviour.tags)} size={88} />
        <View style={styles.topText}>
          <Text style={styles.title}>{behaviour.title}</Text>
          <Chip label={`Age ${behaviour.ageRange}`} tone="plum" />
        </View>
      </View>

      <Card style={styles.reassure}>
        <Text style={styles.reassureLabel}>Is this normal?</Text>
        <Text style={styles.reassureYes}>Yes.</Text>
      </Card>

      <Section title="Why it happens" body={behaviour.whyItHappens} />

      {tricks.length > 0 ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What helps</Text>
          <View style={styles.rows}>
            {tricks.map((trick) => (
              <ListRow
                key={trick.id}
                title={trick.title}
                subtitle={trick.whatItIs}
                locked={!trick.isFree && !isUnlocked}
                onPress={() => openTrick(trick.id, trick.isFree)}
              />
            ))}
          </View>
        </View>
      ) : null}

      <Card style={styles.headsUpCard}>
        <Text style={styles.sectionTitle}>When to check in</Text>
        <Text style={styles.body}>{behaviour.whenToSeekHelp}</Text>
      </Card>
    </ScrollView>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  topText: {
    flex: 1,
    gap: spacing.sm,
  },
  title: {
    ...type.h1,
    color: colors.text,
  },
  reassure: {
    alignItems: 'center',
    gap: spacing.xs,
  },
  reassureLabel: {
    ...type.h2,
    color: colors.text,
  },
  reassureYes: {
    fontFamily: fonts.hand,
    fontSize: 40,
    color: colors.calm,
  },
  section: {
    gap: spacing.sm,
  },
  sectionTitle: {
    ...type.h2,
    color: colors.text,
  },
  body: {
    ...type.body,
    color: colors.text,
  },
  rows: {
    gap: spacing.sm,
  },
  headsUpCard: {
    backgroundColor: '#F5E9D6',
    borderColor: colors.headsUp,
    gap: spacing.sm,
  },
});
