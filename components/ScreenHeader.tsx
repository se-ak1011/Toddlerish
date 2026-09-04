import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Mascot } from '@/components/Mascot';
import type { PoseKey } from '@/lib/mascot';
import { colors, fonts, spacing, type } from '@/theme';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  mascotPose?: PoseKey;
  children?: React.ReactNode;
};

export function ScreenHeader({ title, subtitle, mascotPose, children }: ScreenHeaderProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.wrap, { paddingTop: insets.top + spacing.md }]}>
      <View style={styles.top}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        {mascotPose ? <Mascot pose={mascotPose} size={72} /> : null}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  titleBlock: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    ...type.display,
    color: colors.text,
  },
  subtitle: {
    ...type.body,
    color: colors.textMuted,
  },
});
