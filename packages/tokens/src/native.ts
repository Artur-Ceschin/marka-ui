/**
 * React Native theme object derived from Marka design tokens.
 *
 * Usage:
 *   import { theme } from '@marka/tokens/native'
 *   const styles = StyleSheet.create({ box: { padding: theme.spacing[4] } })
 */
import { colors } from './colors'
import { fonts, fontSizes } from './typography'
import { spacing } from './spacing'
import { radius } from './radius'
import { shadowValues } from './shadows'
import { borderWidth } from './borders'

/** Flat font family strings for React Native (first value from each stack). */
const nativeFonts = {
  display: fonts.display[0],
  body: fonts.body[0],
  mono: fonts.mono[0],
} as const

/**
 * Ready-to-use typography styles for StyleSheet.create().
 * Each entry contains fontSize, lineHeight (absolute px), letterSpacing, and fontFamily.
 */
const nativeTypography = Object.fromEntries(
  Object.entries(fontSizes).map(([key, val]) => {
    const family = key.startsWith('label') || key.startsWith('caption')
      ? nativeFonts.mono
      : key.startsWith('display') || key.startsWith('heading')
        ? nativeFonts.display
        : nativeFonts.body

    return [
      key,
      {
        fontFamily: family,
        fontSize: val.size,
        lineHeight: Math.round(val.size * val.lineHeight),
        letterSpacing: val.letterSpacing === 0 ? undefined : val.size * val.letterSpacing,
      },
    ]
  }),
) as Record<keyof typeof fontSizes, {
  fontFamily: string
  fontSize: number
  lineHeight: number
  letterSpacing?: number
}>

/**
 * React Native shadow styles for each token.
 * iOS uses shadow* properties, Android uses elevation.
 */
function nativeShadow(key: keyof typeof shadowValues) {
  const v = shadowValues[key]
  return {
    shadowColor: v.color,
    shadowOffset: { width: v.x, height: v.y },
    shadowOpacity: 1,
    shadowRadius: v.blur / 2,
    elevation: Math.round(v.blur / 4),
  }
}

const nativeShadows = {
  sm: nativeShadow('sm'),
  md: nativeShadow('md'),
  lg: nativeShadow('lg'),
  greenGlow: nativeShadow('greenGlow'),
  amberGlow: nativeShadow('amberGlow'),
} as const

export const theme = {
  colors,
  fonts: nativeFonts,
  typography: nativeTypography,
  spacing,
  radius,
  shadows: nativeShadows,
  borderWidth,
} as const

export type Theme = typeof theme
