export const colors = {
  bg: {
    birch: '#F5F0E8',
    linen: '#EDE7D9',
    fog: '#E2DDD4',
    bark: '#D4CCC0',
  },
  green: {
    moss: '#4A6741',
    sage: '#7A9E73',
    pale: '#C8D9C4',
    mist: '#EBF2EA',
  },
  amber: {
    DEFAULT: '#C97B3A',
    pale: '#F5E6D3',
  },
  berry: {
    DEFAULT: '#8B4F6B',
    pale: '#F0E4EB',
  },
  text: {
    charcoal: '#2C2C2C',
    stone: '#6B6560',
    ash: '#9E9992',
    white: '#FAF8F4',
  },
  dark: {
    forest: '#1A1F16',
    bark: '#1A1A18',
  },
} as const

export type Colors = typeof colors
