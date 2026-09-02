import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Mascot } from '@/components/Mascot';
import { useOnboarding } from '@/hooks/useOnboarding';
import { colors, fonts, radii, spacing, type } from '@/theme';

const AGE_OPTIONS = ['Under 1', '1–2', '2–3', '3+'];

export default function OnboardingScreen() {
  const router = useRouter();
  const { childAge, setChildAge, completeOnboarding } = useOnboarding();

  const finish = async () => {
    await completeOnboarding();
    router.replace('/');
  };

  const pick = async (age: string) => {
    await setChildAge(age);
  };

  return (
    <View style={styles.screen}>
      <Mascot pose="crawl" size={110} />
      <Text style={styles.title}>How old is your toddler?</Text>
      <Text style={styles.subtitle}>
        We'll use this to gently tailor what you see. Totally optional.
      </Text>

      <View style={styles.options}>
        {AGE_OPTIONS.map((age) => {
          const selected = childAge === age;
          return (
            <Pressable
              key={age}
              onPress={() => pick(age)}
              style={[styles.option, selected && styles.optionSelected]}>
              <Text style={[styles.optionLabel, selected && styles.optionLabelSelected]}>
                {age}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.actions}>
        <Button label="Continue" onPress={finish} disabled={!childAge} />
        <Button label="Skip for now" onPress={finish} variant="secondary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
    gap: spacing.md,
  },
  title: {
    ...type.h1,
    color: colors.text,
    textAlign: 'center',
  },
  subtitle: {
    ...type.body,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  option: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  optionSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionLabel: {
    fontFamily: fonts.bodyBold,
    fontSize: 15,
    color: colors.text,
  },
  optionLabelSelected: {
    color: colors.onPrimary,
  },
  actions: {
    width: '100%',
    gap: spacing.sm,
  },
});
