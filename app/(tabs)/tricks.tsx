import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';

import { EmptyState } from '@/components/EmptyState';
import { ListRow } from '@/components/ListRow';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SearchBar } from '@/components/SearchBar';
import { searchTricks, tricks, type Trick } from '@/data';
import { useEntitlement } from '@/hooks/useEntitlement';
import { colors, spacing } from '@/theme';

export default function TricksScreen() {
  const router = useRouter();
  const { isUnlocked } = useEntitlement();
  const [query, setQuery] = useState('');

  const results = useMemo<Trick[]>(() => (query.trim() ? searchTricks(query) : tricks), [query]);

  const openTrick = (trick: Trick) => {
    if (!trick.isFree && !isUnlocked) {
      router.push('/paywall');
      return;
    }
    router.push({ pathname: '/trick/[id]', params: { id: trick.id } });
  };

  return (
    <View style={styles.screen}>
      <ScreenHeader
        title="What helps"
        subtitle="Gentle, practical things to try in the moment.">
        <SearchBar value={query} onChangeText={setQuery} placeholder="Search tricks" />
      </ScreenHeader>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ListRow
            title={item.title}
            subtitle={item.whatItIs}
            locked={!item.isFree && !isUnlocked}
            onPress={() => openTrick(item)}
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
