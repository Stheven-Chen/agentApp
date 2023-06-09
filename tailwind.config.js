/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{ "78px":"78px", "main":"150vh" }, 
      fontFamily: { 'Poppins': 'Poppins, sans-serif' }, 
      colors:{ "primary":"#0177b9", "login": "#cdcdcd" },
      borderRadius:{
        "30px":"30px"
      }
    },
  },
  plugins: [],
}