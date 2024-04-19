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
        '999' : '999px',
        '900' : '900px',
        '800' : '800px',
        '700' : '700px',
        '500' : '500px',
        '295' : '295px',
        '177' : '177px',
        '61' : '61px',
        '45' : '45px',
        '46' : '46px',
        '43' : '43px',
        '32' : '32px',
        '35' : '35px',
        '56' : '56px',
        '16' : '16px',
        '18' : '18px',
        '20' : '20px'
      },
      width : {
        '1920' : '1920px',
        '600' : '600px',
        '466' : '466px',
        '400' : '400px',
        '300' : '300px',
        '240' : '240px',
        '142' : '142px',
        '122' : '122px',
        '114' : '114px',
        '107' : '107px',
        '101' : '101px',
        '80' : '80px',
        '59' : '59px',
        '61' : '61px',
        '32' : '32px',
        '18' : '18px',
        
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
        'blue1' : '#4F44F0',
        'sideblue' : '#162850',
        'sidefont' : '#D7E0F4',
        'sidebtn' : '#544AE4'

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
