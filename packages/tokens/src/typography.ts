export const fonts = {
  display: ['Playfair Display', 'Georgia', 'serif'] as const,
  body: ['DM Sans', 'system-ui', 'sans-serif'] as const,
  mono: ['Courier Prime', 'Courier New', 'monospace'] as const,
} as const

export const fontSizes = {
  'display-wordmark': { size: 36, lineHeight: 1.1, letterSpacing: 0 },
  'display-screen': { size: 28, lineHeight: 1.2, letterSpacing: -0.01 },
  'heading-xl': { size: 22, lineHeight: 1.3, letterSpacing: -0.01 },
  'heading-lg': { size: 18, lineHeight: 1.3, letterSpacing: 0 },
  'heading-md': { size: 15, lineHeight: 1.4, letterSpacing: 0 },
  'heading-sm': { size: 13, lineHeight: 1.4, letterSpacing: 0 },
  'body-lg': { size: 15, lineHeight: 1.6, letterSpacing: 0 },
  'body-base': { size: 13, lineHeight: 1.6, letterSpacing: 0 },
  'body-sm': { size: 11, lineHeight: 1.5, letterSpacing: 0 },
  'label-lg': { size: 10, lineHeight: 1.4, letterSpacing: 0.15 },
  'label-base': { size: 9, lineHeight: 1.4, letterSpacing: 0.15 },
  'label-sm': { size: 8, lineHeight: 1.4, letterSpacing: 0.1 },
} as const

export type Fonts = typeof fonts
export type FontSizes = typeof fontSizes
