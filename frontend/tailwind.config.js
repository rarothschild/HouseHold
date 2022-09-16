/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '1/2': '50%%',
        '1/3': '33.333333%',
        '2/3': '66.66666%',
        '1/4': '25%',
        '3/4': '75%',
      }
    },
  },
  plugins: [require("daisyui")],
}
