/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: ["light", "dark",],
  plugins: [require("daisyui")],
  extend:
  {
    fontFamily: {
      'Vazirmatn': ['Vazirmatn', 'sans-serif']
    },
  }
}

