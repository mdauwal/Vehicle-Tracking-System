/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Avenir: ["Avenir"],
        CircularSTD: ["CircularSTD"],
        DMsans: ["DMsans"],
      },
    },
  },
  plugins: [require("daisyui"), flowbite.content()],
  daisyui: {
    themes: false,
    darkTheme: "light",
  },
};
