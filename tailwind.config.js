/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4263eb",
        secondary: "#63e6be",
        },
    },
    container:{

      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
      },

      }, 
    },
   darkMode:"class",
  plugins: [],
};

