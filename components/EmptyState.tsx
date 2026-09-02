import { StyleSheet, Text, View } from 'react-native';

import { Mascot } from '@/components/Mascot';
import type { PoseKey } from '@/lib/mascot';
import { colors, spacing, type } from '@/theme';

type EmptyStateProps = {
  title: string;
  subtitle?: string;
  pose?: PoseKey;
};

export function EmptyState({ title, subtitle, pose = 'point' }: EmptyStateProps) {
  return (
    <View style={styles.wrap}>
      <Mascot pose={pose} size={96} />
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
  },
  title: {
    ...type.h2,
    color: colors.text,
    textAlign: 'center',
  },
  subtitle: {
    ...type.body,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
