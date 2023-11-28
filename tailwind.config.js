/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: ["light", "dark",],
  plugins: [require("daisyui")],
  fontFamily: {
    'Yekan': ['Yekan']
  }
}


