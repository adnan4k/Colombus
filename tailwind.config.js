/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'blue-custom': '#00C0F3',
        "fai":"#C3D541"
      },
      colors:{
        'blue-custom': '#00C0F3',
        '0C3C48':'#0C3C48',
        'ECF1F4':'#ECF1F4',
        'A3B5C4':'#A3B5C4'
      },
      boxShadow: {
        'big': '0 0 20px rgba(0, 0, 0, 0.4)',
      },
      fontSize:{
        "custom-size":"20px",
        "letter-size":"200px",
        "14":"15px",
        "text":"14px" ,
        "icon":"8px"
      },

      height:{
        "600":"600px"
      },
      borderWidth:{
         'border':'25px'
      },
      margin:{
       "mt":"40px"
      }
    },
  },
  plugins: [],
  corePlugins: {
    // Enable margin classes
    margin: true,
  },
}

