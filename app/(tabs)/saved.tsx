import { useMemo } from 'react';
import { useRouter } from 'expo-router';
import { SectionList, StyleSheet, Text, View } from 'react-native';

import { EmptyState } from '@/components/EmptyState';
import { ListRow } from '@/components/ListRow';
import { ScreenHeader } from '@/components/ScreenHeader';
import { getBehaviour, getTrick } from '@/data';
import { useSaved } from '@/hooks/useSaved';
import { colors, fonts, spacing } from '@/theme';

type SavedRow = { id: string; title: string; subtitle: string; kind: 'behaviour' | 'trick' };

export default function SavedScreen() {
  const router = useRouter();
  const { savedBehaviourIds, savedTrickIds } = useSaved();

  const sections = useMemo(() => {
    const savedBehaviours: SavedRow[] = savedBehaviourIds
      .map((id) => getBehaviour(id))
      .filter((b): b is NonNullable<typeof b> => b !== undefined)
      .map((b) => ({ id: b.id, title: b.title, subtitle: `Age ${b.ageRange}`, kind: 'behaviour' }));
    const savedTricks: SavedRow[] = savedTrickIds
      .map((id) => getTrick(id))
      .filter((t): t is NonNullable<typeof t> => t !== undefined)
      .map((t) => ({ id: t.id, title: t.title, subtitle: t.whatItIs, kind: 'trick' }));

    return [
      { title: 'Behaviours', data: savedBehaviours },
      { title: 'Tricks', data: savedTricks },
    ].filter((section) => section.data.length > 0);
  }, [savedBehaviourIds, savedTrickIds]);

  const isEmpty = sections.length === 0;

  return (
    <View style={styles.screen}>
      <ScreenHeader
        title="Saved"
        subtitle="The behaviours and tricks you've kept close."
        mascotPose="teddy"
      />
      {isEmpty ? (
        <EmptyState
          title="Nothing saved yet"
          subtitle="Tap the heart on any behaviour or trick to keep it here."
          pose="teddy"
        />
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionTitle}>{section.title}</Text>
          )}
          renderItem={({ item }) => (
            <ListRow
              title={item.title}
              subtitle={item.subtitle}
              onPress={() =>
                item.kind === 'behaviour'
                  ? router.push({ pathname: '/behaviour/[id]', params: { id: item.id } })
                  : router.push({ pathname: '/trick/[id]', params: { id: item.id } })
              }
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: spacing.sm }} />}
          SectionSeparatorComponent={() => <View style={{ height: spacing.lg }} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  list: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  sectionTitle: {
    fontFamily: fonts.hand,
    fontSize: 20,
    color: colors.text,
    marginBottom: spacing.sm,
  },
});
