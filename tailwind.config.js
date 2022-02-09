module.exports = {
  mode:"jit",
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    backgroundImage: {
      'section-1': "url('../public/bg-resized.jpg')",
    },
    extend: {
      fontFamily:{
        nimbus: 'Nimbus',
        nunito: 'Nunito'
      }
    },
    screens: {
      'xxsm': '390px',
      // => @media (min-width: 390px) { ... }

      'xsm': '410px',
      // => @media (min-width: 420px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '2.5xl': '1920px',
      // => @media (min-width: 1920px) { ... }
      '3xl':'2560px'
    }
  },
  plugins: [],
}
