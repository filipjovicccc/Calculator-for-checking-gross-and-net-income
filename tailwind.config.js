/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    'src/**/*.js',
  'src/**/*.css',
  'public/index.html'],
  theme: {
    screens: {
      'sm': '640px',
  

      'md': '768px',
     

      'lg': '1024px',
 

      'xl': '1280px',
    

      '2xl': '1536px',
    
    },

     extend: {
       backgroundImage: {
        "hero-patern": "url('/src/assests/img/bank.png')"
       },
       colors: {
        primary: 'FD0202',
        secondary: "594FB1",
        darkGray: "323233"
    
       }
    },
  },
  plugins: [],
}
