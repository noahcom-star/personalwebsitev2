/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['IBM Plex Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        // James Clear inspired color palette
        primary: {
          50: '#f7f7f6',
          100: '#efeeec',
          200: '#dddbd6',
          300: '#c4c0b8',
          400: '#a8a195',
          500: '#918977',
          600: '#7c7467',
          700: '#676156',
          800: '#55524a',
          900: '#47453f',
          950: '#252420',
        },
        accent: {
          50: '#f4f7f4',
          100: '#e6ebe6',
          200: '#ced7ce',
          300: '#aab9aa',
          400: '#829582',
          500: '#637963',
          600: '#4e614e',
          700: '#404e40',
          800: '#364036',
          900: '#2e352e',
          950: '#171b17',
        },
        warm: {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e8e2d9',
          300: '#d9cfc0',
          400: '#c7b8a3',
          500: '#b5a188',
          600: '#a18e75',
          700: '#8a7863',
          800: '#736456',
          900: '#5e5349',
          950: '#322b25',
        }
      }
    },
  },
  plugins: [],
} 