/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    screens : {
      'mobile' : '640px',
      'tablet' : '768px',
      'pc' : '1024px',
      'widepc' : '1280px'
    },
     extend: {
      height : {
        '900' : '900px',
        '700' : '700px',
        '500' : '500px',
      },
      width : {
        '400' : '400px',
        '300' : '300px',
        '240' : '240px',
        '80' : '80px'
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
