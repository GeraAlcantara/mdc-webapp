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
            transform: "translate3d(0, 45px, 0)",
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
            transform: "translate3d(0, 45px, 0)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
