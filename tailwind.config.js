/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#008AD8',
      'red': '#DC3F35',
      'dark-gray': '#1D1D1D',
      'gray': '#989898',
      'white': '#FFFFFF',
      'black': '#000000',
      'black-opaque': '#00000099'

    },
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
      fontSize: {
        '6xl': '4rem'
      },
      lineHeight: {
        'tight': '1.1'
      },
      transitionTimingFunction: {

      }
    },
  },
  plugins: [],
}