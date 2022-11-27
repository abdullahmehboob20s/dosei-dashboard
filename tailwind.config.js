/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: "'Inter', sans-serif",
    },

    colors: {
      main: "#0A142A",
      primary: "#0029FF",
      white: "white",
      whiteGrayish: {
        100: "rgba(255,255,255,.1)",
        200: "rgba(255,255,255,.2)",
        300: "rgba(255,255,255,.3)",
        400: "rgba(255,255,255,.4)",
        500: "rgba(255,255,255,.5)",
        600: "rgba(255,255,255,.6)",
        700: "rgba(255,255,255,.7)",
        800: "rgba(255,255,255,.8)",
        900: "rgba(255,255,255,.9)",
        1000: "rgba(255,255,255,1)",
      },
      black: "black",
      transparent: "transparent",
      secondary: "#030916",
      green: "#05FF00",
      purple: "#9038FF",
      gray: {
        main: "#808080",
        2: "#0E121B",
      },
      link: "#38B7FF",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
