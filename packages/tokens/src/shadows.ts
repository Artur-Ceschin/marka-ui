export const shadows = {
  sm: '0 2px 8px rgba(44,40,35,0.08)',
  md: '0 6px 24px rgba(44,40,35,0.12)',
  lg: '0 16px 48px rgba(44,40,35,0.18)',
  greenGlow: '0 4px 16px rgba(74,103,65,0.45)',
  amberGlow: '0 4px 16px rgba(201,123,58,0.35)',
} as const

/** Structured shadow data for platforms that don't support CSS box-shadow strings. */
export const shadowValues = {
  sm: { x: 0, y: 2, blur: 8, color: 'rgba(44,40,35,0.08)' },
  md: { x: 0, y: 6, blur: 24, color: 'rgba(44,40,35,0.12)' },
  lg: { x: 0, y: 16, blur: 48, color: 'rgba(44,40,35,0.18)' },
  greenGlow: { x: 0, y: 4, blur: 16, color: 'rgba(74,103,65,0.45)' },
  amberGlow: { x: 0, y: 4, blur: 16, color: 'rgba(201,123,58,0.35)' },
} as const

export type Shadows = typeof shadows
export type ShadowValues = typeof shadowValues
