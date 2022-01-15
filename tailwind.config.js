module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F7F7F7',
        'secondary': '#F2F2F2',
        'typograhpy': '#6F6A67',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'mobile-hero-bg': "url('/mobile-bg.jpg')",
        'desktop-hero-bg': "url('/desktop-bg.jpg')",
        'book': "url('/book.png')"
      }
    },
  },
  plugins: [],
}

