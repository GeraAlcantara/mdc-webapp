/** @type {import('tailwindcss').Config} */
// @ts-ignore
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#1070e5",
        accent: "#00fb15",
        bg_primary: "#001322",
        bg_secondary: "#002640",
        lineGradient_1: "#00bec6",
        lineGradient_2: "#4cff91",
        lineGradient_3: "#02e239",
        brandBlue: {
          50: "#59e0fa",
          100: "#60b7c8",
          400: "#386fdd",
          500: "#12283f",
          600: "#071b2f",
          700: "#263749",
        },
      },
      fontFamily: {
        RobotoCondense: ["Lato", ...defaultTheme.fontFamily.sans],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        sectionhr: "slidehrright 5s ease infinite both",
        carousel: "scroll 30s linear infinite",
        FadeInSlidein: "fadeInSlidein 1s forwards",
        FadeOutSlideout: "fadeOutSlideout 1s forwards",
      },
      keyframes: {
        slidehrright: {
          "0%": { width: "0" },
          "100%": { width: "45%" },
        },
        scroll: {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(calc(-150px * 5))",
          },
        },
        fadeInSlidein: {
          from: {
            transform: "translate3d(0, 60px, 0)",
            opacity: 0,
          },
          to: {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
          },
        },
        fadeOutSlideout: {
          from: {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
          },
          to: {
            transform: "translate3d(0, 60px, 0)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
