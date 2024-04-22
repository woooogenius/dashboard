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
      'widepc' : '1920px',
    },
     extend: {
      height : {
       
      },
      width : {
       
      },
      padding : {
        '124' : '124px',
        '40' : '40px'
      },
      margin : {
        '40' : '40px',
        '7' : '7px',
        '56' : '56px',
        '20' : '20px',
        '16' : '16px'
      },
      fontSize : {
        '28' : '28px',
        '18' : '18px',
      },
      colors : {
        'fontblue' : '#5146F0',
        'fontgray' : '#525252',
        'lightgray' : '#8D8D8D',
        'lightgray2' : '#F7F7F7',
        'lightgray3' : '#7B7B7B',
        'lightgray4' : '#F6F6F6',
        'violet' : '#5E2BFF',
        'violet2' : '#544AE4',
        'blue1' : '#4F44F0',
        'sideblue' : '#162850',
        'sidefont' : '#D7E0F4',
        'sidebtn' : '#544AE4',
        'borderce' : '#CECECE'

      },
      lineHeight : {
        '43' : '43px'
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
