/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'space-grotesk': ['Space Grotesk'],
      'f37': ['F37 Grotesc'],
    },
    extend: {
      colors: {
        bgrey: "#D3D3D3",
        Velvet:"#4D0C44",
        Svelvet:"#940057",
        Solitude: "#e9e9ea",
        gold: "#CCA000",
        grey:"#C1C9D1"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
         "0%": {
            /* Define the starting point of the animation */
            transform: 'translateX(0)'
          },
          "100%": {
            /* Define the ending point of the animation */
            transform: 'translateX(-100%)'
          }
        }
        
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}