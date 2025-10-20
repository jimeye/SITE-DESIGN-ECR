import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8dcc4',
          300: '#d4c5a9',
          400: '#c0ae8e',
          500: '#ac9773',
          600: '#8a7a5c',
          700: '#675c45',
          800: '#453d2e',
          900: '#1a1a1a',
          950: '#0a0a0a',
        },
        accent: {
          light: '#e8dcc4',
          DEFAULT: '#d4c5a9',
          dark: '#c0ae8e',
        },
        neutral: {
          cream: '#faf9f7',
          beige: '#f5f3ef',
          warm: '#e8dcc4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config

