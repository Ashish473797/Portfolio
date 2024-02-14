/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'Eerie black': '#222222',
        'White': '#FFFFFF',
        'Lapis Lazuli': '#1C5D99',
        'Moonstone': '#639FAB',
        'Powder blue': '#BBCDE5',
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'profile': 'url()'
      }
    },
  },
  plugins: [],
}
