/* eslint-disable no-undef */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "hsl(0, 0%, 98%)",
        ligthEl: "hsl(0, 0%, 100%)",
        ligthText: "hsl(200, 15%, 8%)",
        ligthInput: "hsl(0, 0%, 52%)",

        bgDark: "hsl(207, 26%, 17%)",
        darkEl: "hsl(209, 23%, 22%)",
        darkText: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
