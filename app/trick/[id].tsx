import { useEffect } from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import { Card } from '@/components/Card';
import { ListRow } from '@/components/ListRow';
import { Mascot } from '@/components/Mascot';
import { getBehavioursForTrick, getTrick } from '@/data';
import { useEntitlement } from '@/hooks/useEntitlement';
import { useSaved } from '@/hooks/useSaved';
import { colors, spacing, type } from '@/theme';

export default function TrickDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { isUnlocked } = useEntitlement();
  const { isTrickSaved, toggleTrickSaved } = useSaved();

  const trick = getTrick(id);
  const locked = trick ? !trick.isFree && !isUnlocked : false;

  useEffect(() => {
    if (!trick || locked) router.replace('/paywall');
  }, [trick, locked, router]);

  if (!trick || locked) return null;

  const relatedBehaviours = getBehavioursForTrick(trick);
  const saved = isTrickSaved(trick.id);

  const openBehaviour = (behaviourId: string, behaviourIsFree: boolean) => {
    if (!behaviourIsFree && !isUnlocked) {
      router.push('/paywall');
      return;
    }
    router.push({ pathname: '/behaviour/[id]', params: { id: behaviourId } });
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen
        options={{
          title: trick.title,
          headerRight: () => (
            <Pressable onPress={() => toggleTrickSaved(trick.id)} hitSlop={12}>
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
        <Mascot pose="calm" size={88} />
        <Text style={styles.title}>{trick.title}</Text>
      </View>

      <Section title="What it is" body={trick.whatItIs} />
      <Section title="How to do it" body={trick.howToDoIt} />
      <Section title="Why it works" body={trick.whyItWorks} />

      {relatedBehaviours.length > 0 ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Try it with</Text>
          <View style={styles.rows}>
            {relatedBehaviours.map((behaviour) => (
              <ListRow
                key={behaviour.id}
                title={behaviour.title}
                subtitle={`Age ${behaviour.ageRange}`}
                locked={!behaviour.isFree && !isUnlocked}
                onPress={() => openBehaviour(behaviour.id, behaviour.isFree)}
              />
            ))}
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <Card style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </Card>
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
  title: {
    ...type.h1,
    color: colors.text,
    flex: 1,
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
});
