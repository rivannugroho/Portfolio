/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center : true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#a855f7',
        dark: '#0f172a',
        secondry: '#64748b'
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

