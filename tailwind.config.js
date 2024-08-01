/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header2: '#004d00',
        content2: '#ffffff',
        footer2: '#004d00',
        text2: '#ffb700',
        smallBox1: '#1c1c1c', 
        smallBox2: '#2e2e2e', 
        sectionBack1: '#f5f5f5', 
        sectionBack2: '#e0e0e0',
        accent1: '#b0b0b0', 
        accent2: '#d1d1d1',
        body1 : '#17202a',
        green1 :'#00b196',
        yellow1:'#ffb115'
      },
    },
  },
  plugins: [],
}

