import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';

import { colors, fonts } from '@/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.bodyBold,
          fontSize: 12,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Is this normal?',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'questionmark.circle', android: 'help', web: 'help' }}
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tricks"
        options={{
          title: 'Tricks',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'lightbulb', android: 'lightbulb', web: 'lightbulb' }}
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'heart.fill', android: 'favorite', web: 'favorite' }}
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
