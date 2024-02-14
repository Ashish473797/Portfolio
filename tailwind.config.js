/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#111111',
        'lapis-blue': '#1C5D99',
        'moonstone': '#639FAB',
        'powder-blue': '#BBCDE5',
        'voli':'#6320EE',
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'profile': "url('/port/assets/profile.jfif')",
        'logo': "url('/port/assets/logo.png')"
      }
    },
  },
  plugins: [],
}
