/** @type {import('tailwindcss').Config} */
// @ts-ignore
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#1f6cc9',
        accent: '#72fb59',
        bg_primary: '#001323'
      },
      fontFamily: {
        RobotoCondense: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
        'sans': ['Roboto Condensed', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
