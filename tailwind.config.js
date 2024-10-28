/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {


      colors : {
        "primary":{
          100 : "rgb( 34 197 94 )",
        },
        'custom-gradient': 'linear-gradient(180deg, #fff0, #fffc 74.19%, #fff)',
        "bg-body" : {
          DEFAULT : 'rgb(243 ,244, 246)' 
        },
        "dark-card" : {
          DEFAULT : "rgb(36 42 56)"
        }
      }

      ,
      spacing : {
        "17" : "4.25rem",
        "88" : "22rem",
        "container" : "1260px",
        "110" : "27.5rem"
      },

      fontFamily : {
        'dana' : 'dana',
        'dana-bold' : 'dana-bold'
      }
      ,

      lineHeight : {
        '14' : '3.5rem'
      }
      ,

      screens: {
        '2xl': {'max': '1535px'},
        'desktop': {'max' : '1280px'},
        'laptop':{ 'max' : '1024px'},
        'tablet':{'max' : '768px'},
        'mobile':{ 'max' :' 640px'},
      }
      
    },


    container: {
      center: true,
      padding : {
        DEFAULT : '1rem',
      }
    },


  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

