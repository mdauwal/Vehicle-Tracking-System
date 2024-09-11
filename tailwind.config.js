/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Avenir: ['Avenir'],
        CircularSTD: ['CircularSTD'],
        DMsans: ['DMsans'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    darkTheme: 'light',
  },
};
