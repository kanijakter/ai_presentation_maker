/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line ensures Tailwind scans your JSX files
  ],
  theme: {
    extend: {
      colors: { // Optional: Define custom theme colors for easy reuse
        amber: { // Matching Tailwind's amber
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        neutral: { // Matching Tailwind's neutral
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      }
    },
  },
  plugins: [],
}