/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        tomato: "#ff6257",
        "dark-slate-grey": "#242742",
        "charcoal-grey": "#36384e",
        grey: "#9294a0",
      },
    },
  },
  plugins: [],
};
