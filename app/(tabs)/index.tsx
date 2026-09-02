import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';

import { EmptyState } from '@/components/EmptyState';
import { ListRow } from '@/components/ListRow';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SearchBar } from '@/components/SearchBar';
import { behaviours, searchBehaviours, type Behaviour } from '@/data';
import { useEntitlement } from '@/hooks/useEntitlement';
import { colors, spacing } from '@/theme';

export default function BehavioursScreen() {
  const router = useRouter();
  const { isUnlocked } = useEntitlement();
  const [query, setQuery] = useState('');

  const results = useMemo<Behaviour[]>(
    () => (query.trim() ? searchBehaviours(query) : behaviours),
    [query]
  );

  const openBehaviour = (behaviour: Behaviour) => {
    if (!behaviour.isFree && !isUnlocked) {
      router.push('/paywall');
      return;
    }
    router.push({ pathname: '/behaviour/[id]', params: { id: behaviour.id } });
  };

  return (
    <View style={styles.screen}>
      <ScreenHeader
        title="Hi there"
        subtitle="Wondering if something your toddler's doing is normal? Search or browse below."
        mascotPose="wave">
        <SearchBar value={query} onChangeText={setQuery} placeholder="Search behaviours" />
      </ScreenHeader>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ListRow
            title={item.title}
            subtitle={`Age ${item.ageRange}`}
            locked={!item.isFree && !isUnlocked}
            onPress={() => openBehaviour(item)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: spacing.sm }} />}
        ListEmptyComponent={
          <EmptyState
            title="Nothing matches that yet"
            subtitle="Try a different word, or browse the full list."
            pose="point"
          />
        }
      />
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
});
