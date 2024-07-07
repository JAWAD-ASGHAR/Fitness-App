/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px", // Custom screen size
        xl: "1150px", // Custom screen size
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
