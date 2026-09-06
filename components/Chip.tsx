import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, radii, spacing } from '@/theme';

type ChipProps = {
  label: string;
  tone?: 'plum' | 'calm' | 'headsUp';
};

const TONES = {
  plum: { bg: colors.plumTint, text: colors.primaryDeep },
  calm: { bg: '#EDE6F0', text: colors.calm },
  headsUp: { bg: '#F5E9D6', text: '#7A5C2C' },
} as const;

export function Chip({ label, tone = 'plum' }: ChipProps) {
  const palette = TONES[tone];
  return (
    <View style={[styles.chip, { backgroundColor: palette.bg }]}>
      <Text style={[styles.label, { color: palette.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
  },
  label: {
    fontFamily: fonts.bodyBold,
    fontSize: 12,
  },
});
