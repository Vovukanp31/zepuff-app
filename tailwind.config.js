/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      rubik: ["Rubik-Regular", "normal"],
    },
    extend: {
      colors: {
        'mainPurple': '#7747FF',
        'mainMagenta': '#FF4E8D',
        'mainYellow': '#FFE600',
        'additionalTextGray': '#404040',
        'additionalpurple': '#7747FF80'
      },
    },
  },
  plugins: [],
}
