/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#010101',
        'lapis-blue': '#1C5D99',
        'moonstone': '#639FAB',
        'powder-blue': '#BBCDE5',
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'profile': "url('/port/assets/profile.png')",
        'logo': "url('./port/assets/logo.png')"
      }
    },
  },
  plugins: [],
}
