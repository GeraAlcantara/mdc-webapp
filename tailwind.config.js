/** @type {import('tailwindcss').Config} */
// @ts-ignore
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#f2f2f2",
            a: {
              color: "#00bec6",
              "&:hover": {
                color: "#1070e5",
              },
            },
            strong: {
              color: "#00bec6",
            },
            ol: {
              li: {
                "&::marker": {
                  color: "#00bec6",
                  fontWeight: "900",
                  fontSize: "1.5rem",
                },
              },
            },
          },
        },
      },
      colors: {
        secondary: "#1070e5",
        accent: "#00fb15",
        brandWhite: "#f2f2f2",
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
        tropicalBlue: "#00bec6",
        mintGreen: "#4cff91",
        brightGreen: "#02e239",
      },
      fontFamily: {
        Lato: ["Lato", '"Helvetica Neue"', "Arial", "sans-serif"],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        sectionhr: "slidehrright 5s ease infinite both",
        carousel: "scroll 25s linear infinite",
        FadeInSlidein: "fadeInSlidein 1s forwards",
        FadeOutSlideout: "fadeOutSlideout 1s forwards",
        heartbeat: "heartbeat 1.5s ease-in-out infinite both",
        swipeIcon: "swipeIcon 1.8s ease-in-out infinite both",
      },
      keyframes: {
        swipeIcon: {
          "0%": {
            transform: "rotate(20deg)",
          },
          "50%": {
            transform: "rotate(-20deg)",
          },
          "100%": {
            transform: "rotate(20deg)",
          },
        },
        heartbeat: {
          from: {
            transform: "scale(1)",
            transformOrigin: "center center",
            animationTimingFunction: "ease-out",
          },
          "10%": {
            transform: "scale(0.91)",
            animationTimingFunction: "ease-in",
          },
          "17%": {
            transform: "scale(0.98)",
            animationTimingFunction: "ease-out",
          },
          "33%": {
            transform: "scale(0.87)",
            animationTimingFunction: "ease-in",
          },
          "45%": {
            transform: "scale(1)",
            animationTimingFunction: "ease-out",
          },
        },
        slidehrright: {
          "0%": { width: "0" },
          "100%": { width: "45%" },
        },
        scroll: {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(calc(-120px * 5))",
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
  plugins: [require("@tailwindcss/typography")],
};
