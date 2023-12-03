/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './pages/*.{html,js}', './js/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'Vazirmatn': ['Vazirmatn', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },


}

