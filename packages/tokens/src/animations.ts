export const keyframes = {
  'fade-in': {
    '0%': { opacity: '0', transform: 'translateY(4px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-out': {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(4px)' },
  },
  'slide-in-from-bottom': {
    '0%': { opacity: '0', transform: 'translateY(100%)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'slide-out-to-bottom': {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(100%)' },
  },
  scan: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(100px)' },
  },
  'pulse-green': {
    '0%, 100%': { boxShadow: '0 4px 16px rgba(74,103,65,0.45)' },
    '50%': { boxShadow: '0 4px 24px rgba(74,103,65,0.65)' },
  },
} as const

export const animation = {
  'fade-in': 'fade-in 0.2s ease-out',
  'fade-out': 'fade-out 0.15s ease-in forwards',
  'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
  'slide-out-to-bottom': 'slide-out-to-bottom 0.2s ease-in forwards',
  scan: 'scan 2s ease-in-out infinite',
  'pulse-green': 'pulse-green 2s ease-in-out infinite',
} as const
