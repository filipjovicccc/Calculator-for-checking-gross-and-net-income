/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    'src/**/*.js',
  'src/**/*.css',
  'public/index.html'],
  theme: {
     extend: {
       backgroundImage: {
        "hero-patern": "url('/src/assests/img/bank.png')"
       },
       colors: {
        primary: 'FD0202',
        secondary: "594FB1"
    
       }
    },
  },
  plugins: [],
}
