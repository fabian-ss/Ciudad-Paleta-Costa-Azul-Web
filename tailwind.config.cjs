/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mini': '350px',
      'mobil': '450px',
      'medium': '650px',
      'size570': '570px',
      'size770': '770px',
      'size781': '781px',      
      'size490': '490px',  
      'size890': '890px',   
      
    },
    extend: {
      fontFamily: {
        popsicle: ["Popsicle"],

      },
    },
  },
  plugins: [],
}
