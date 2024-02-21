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
        rosauniyop: '#F094BC',
        rosauniyopcard: '#ebc7d6',
        naranjayop: '#EF8C45',
        naranjayopcard: '#edaf82',
        verdeyop: '#33B438',
        verdeyopcard: '#98E69B',
        amarilloyop: '#F6D84D',
        amarilloyopcard: '#f7e697',
        
      },
      screens: {
        'xs': '120px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

