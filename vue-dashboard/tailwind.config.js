/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      height : {
        '700' : '700px'
      },
      width : {
        '400' : '400px',
        '240' : '240px',
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
