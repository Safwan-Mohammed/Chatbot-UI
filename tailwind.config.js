/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxHeight:{
        '3/4' : '75%',
        '2/4' : '50%',
        '1/4' : '25%'
      }
    },
  },
  plugins: [],
}

