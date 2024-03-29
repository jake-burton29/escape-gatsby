/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
      transition: "transform 1s linear",
    },
  });
});
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms"), Myclass],
  daisyui: {
    themes: ["business", "dark"],
  },
};
