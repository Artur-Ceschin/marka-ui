/**
 * Re-export all tokens from @marka/tokens.
 * This keeps backward compatibility for existing consumers of @marka/ui
 * that import tokens from '@marka/ui'.
 */
export {
  tokens,
  colors,
  fonts,
  fontSizes,
  spacing,
  radius,
  shadows,
  borderWidth,
} from '@marka/tokens'

export type {
  Colors,
  Fonts,
  Spacing,
  Radius,
  Shadows,
} from '@marka/tokens'
