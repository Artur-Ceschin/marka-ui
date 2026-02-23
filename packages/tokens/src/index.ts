export { colors } from './colors'
export type { Colors } from './colors'

export { fonts, fontSizes } from './typography'
export type { Fonts, FontSizes } from './typography'

export { spacing } from './spacing'
export type { Spacing } from './spacing'

export { radius } from './radius'
export type { Radius } from './radius'

export { shadows, shadowValues } from './shadows'
export type { Shadows, ShadowValues } from './shadows'

export { borderWidth } from './borders'
export type { BorderWidth } from './borders'

export { keyframes, animation } from './animations'

import { colors } from './colors'
import { fonts, fontSizes } from './typography'
import { spacing } from './spacing'
import { radius } from './radius'
import { shadows, shadowValues } from './shadows'
import { borderWidth } from './borders'
import { keyframes, animation } from './animations'

export const tokens = {
  colors,
  fonts,
  fontSizes,
  spacing,
  radius,
  shadows,
  shadowValues,
  borderWidth,
  keyframes,
  animation,
} as const
