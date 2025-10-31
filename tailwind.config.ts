import type { Config } from 'tailwindcss'
import { colours } from './src/styles/colors'
import { fonts } from './src/styles/font'
import { shadows } from './src/styles/shadows'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, css}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        canela: ['CanelaDeck', 'serif'],
        inter: ['Inter', 'sans-serif']
      },
    borderColor: {
      DEFAULT: 'var(--border-color)',
    },

      fontSize: fonts,

      colors: { ...colours },

      boxShadow: shadows,

    },
  },
plugins: [
]
} satisfies Config

