/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amber': {
          600: '#B45309',
          700: '#92400E'
        }
      }
    },
  },
  plugins: [],
}
