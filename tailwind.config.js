/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        deepNavy: '#090e17',
        cardNavy: '#111a2e',
        bronze: {
          gold: '#d4af37',
          light: '#f3e5ab',
          dark: '#c59b27',
        }
      }
    },
  },
  plugins: [],
}