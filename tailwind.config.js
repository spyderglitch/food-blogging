/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    textColor: {
      primary: "#0E2368",
      secondary: "#E23744",
      body: "#444957",
      white: "#fff",
    },
    fontFamily: {
      heading: ["Source Sans Pro", "sans-serif"],
    },
    backgroundColor: {
      primary: "#E23744",
      secondary: "#edf2f7",
      tertiary: "rgba(226, 55, 68, 0.1)"
    },
    borderColor: {
      primary: "#0E2368",
    },
    extend: {},
  },
  plugins: [],
};
