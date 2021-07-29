// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // prettier-ignore
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      // prettier-ignore
      'md': '815px',
      // => @media (min-width: 768px) { ... }

      // prettier-ignore
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      // prettier-ignore
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // prettier-ignore
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      poppins: ['"Poppins"', "serif"],
    },
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      spacing: {
        13: "3.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
