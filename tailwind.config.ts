import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-colors': {
          0: 'var(--colors-primary-0)',
          1: 'var(--colors-primary-1)',
          2: 'var(--colors-primary-2)',
          3: 'var(--colors-primary-3)',
          4: 'var(--colors-primary-4)',
          5: 'var(--colors-primary-5)',
          6: 'var(--colors-primary-6)',
          7: 'var(--colors-primary-7)',
          8: 'var(--colors-primary-8)',
          9: 'var(--colors-primary-9)',
        },
        secondary: 'var(--secondary-color)',
        'secondary-colors': {
          0: 'var(--colors-secondary-0)',
          1: 'var(--colors-secondary-1)',
          2: 'var(--colors-secondary-2)',
          3: 'var(--colors-secondary-3)',
          4: 'var(--colors-secondary-4)',
          5: 'var(--colors-secondary-5)',
          6: 'var(--colors-secondary-6)',
          7: 'var(--colors-secondary-7)',
          8: 'var(--colors-secondary-8)',
          9: 'var(--colors-secondary-9)',
        },
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addUtilities } = api

      const newUtilities = {
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.absolute-vertical-center': {
          position: 'absolute',
          top: '50%',
          transform: 'translate(0, -50%)',
        },
        '.mantine-active': {
          transform: 'translateY(calc(0.0625rem* var(--mantine-scale)))',
        },
      }

      addUtilities(newUtilities)
    },
  ],
} satisfies Config
