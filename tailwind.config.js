/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'asap': ['"Asap"', 'sans-serif'],
      },
      colors: {
        azuluniyop: '#0284C7', 
        azulclaro: '#4e82c2',
        azultext: '#204088',
        moradofondo: '#aba0ea',
        azulreview: '#3084e2',
        textoblog: '#64748B',
        fondoplomo: '#F3F4F6',
        textogris:  '#566A7F',

      },
    },
  },
  plugins: [],
}

