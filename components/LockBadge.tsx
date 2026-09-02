import { StyleSheet, Text, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import { colors, fonts, radii, spacing } from '@/theme';

export function LockBadge() {
  return (
    <View style={styles.badge}>
      <SymbolView
        name={{ ios: 'lock.fill', android: 'lock', web: 'lock' }}
        size={12}
        tintColor={colors.onPrimary}
      />
      <Text style={styles.label}>Unlock</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
  },
  label: {
    fontFamily: fonts.bodyBold,
    fontSize: 11,
    color: colors.onPrimary,
  },
});
