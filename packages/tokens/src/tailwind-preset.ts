/**
 * Tailwind CSS preset generated from Marka design tokens.
 * Usage in your tailwind.config.ts:
 *
 *   import { markaPreset } from '@marka/tokens/tailwind'
 *   export default { presets: [markaPreset], content: [...] }
 */
import type { Config } from 'tailwindcss'
import { colors } from './colors'
import { fonts, fontSizes } from './typography'
import { spacing } from './spacing'
import { radius } from './radius'
import { shadows } from './shadows'
import { borderWidth } from './borders'
import { keyframes, animation } from './animations'

function px(n: number): string {
  return `${n}px`
}

function em(n: number): string {
  return `${n}em`
}

function fontStack(stack: readonly string[]): string[] {
  return [...stack]
}

const tailwindFontSizes: Record<string, [string, Record<string, string>]> = {}
for (const [key, val] of Object.entries(fontSizes)) {
  tailwindFontSizes[key] = [
    px(val.size),
    {
      lineHeight: String(val.lineHeight),
      letterSpacing: val.letterSpacing === 0 ? '0' : em(val.letterSpacing),
    },
  ]
}

const tailwindSpacing: Record<string, string> = {}
for (const [key, val] of Object.entries(spacing)) {
  tailwindSpacing[key] = px(val)
}

const tailwindRadius: Record<string, string> = {}
for (const [key, val] of Object.entries(radius)) {
  tailwindRadius[key] = val === 9999 ? '9999px' : px(val)
}

const tailwindBorderWidth: Record<string, string> = {}
for (const [key, val] of Object.entries(borderWidth)) {
  tailwindBorderWidth[key === 'default' ? 'DEFAULT' : key] = val === 1 ? '1px' : `${val}px`
}

export const markaPreset: Config = {
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily: {
        display: fontStack(fonts.display),
        body: fontStack(fonts.body),
        mono: fontStack(fonts.mono),
      },
      fontSize: tailwindFontSizes,
      spacing: tailwindSpacing,
      borderRadius: tailwindRadius,
      boxShadow: {
        sm: shadows.sm,
        md: shadows.md,
        lg: shadows.lg,
        'green-glow': shadows.greenGlow,
        'amber-glow': shadows.amberGlow,
      },
      borderWidth: tailwindBorderWidth,
      keyframes,
      animation,
    },
  },
  plugins: [],
}
