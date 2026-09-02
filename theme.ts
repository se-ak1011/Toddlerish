// theme.ts
//
// Single source of truth for Toddlerish's look and feel. Swap the values
// below to re-brand the whole app — every themed component reads from here.

export const colors = {
  bg: '#F7F2EE',
  surface: '#EDE6E2',
  plumTint: '#E4D6E3',
  primary: '#7C5A82',
  primaryDeep: '#5E4562',
  accent: '#D3A29E',
  text: '#392F3A',
  textMuted: '#7E747C',
  onPrimary: '#FBF8F6',
  border: '#DCD3D0',
  calm: '#9DB29F',
  headsUp: '#D8B27E',
} as const;

export const fonts = {
  hand: 'ShantellSans_500Medium',
  body: 'Nunito_400Regular',
  bodyBold: 'Nunito_700Bold',
} as const;

export const type = {
  display: { fontFamily: fonts.hand, fontSize: 34, lineHeight: 40 },
  h1: { fontFamily: fonts.hand, fontSize: 26, lineHeight: 32 },
  h2: { fontFamily: fonts.bodyBold, fontSize: 20, lineHeight: 26 },
  body: { fontFamily: fonts.body, fontSize: 16, lineHeight: 24 },
  small: { fontFamily: fonts.body, fontSize: 13, lineHeight: 18 },
} as const;

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 } as const;

export const radii = { sm: 8, md: 14, lg: 20, pill: 999 } as const;

export const theme = { colors, fonts, type, spacing, radii } as const;

export type Theme = typeof theme;
