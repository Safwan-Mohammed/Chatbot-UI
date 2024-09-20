/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxHeight:{
        '3/4' : '75%',
        '2/4' : '50%',
        '1/4' : '25%'
      },
      colors:{
        'custom-color' : '#009999',
      },  
      borderRadius:{
        'half' : '30%'
      },
      fontFamily: {
        SiemensHeader: ['SiemensHeading', 'sans-serif'],
        SiemensContent: ['SiemensContent', 'sans-serif']
      }
    }
  },
  plugins: [],
}