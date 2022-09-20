/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoCondense: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
        'sans': ['Roboto Condensed', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
