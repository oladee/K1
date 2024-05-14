/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        cream : "#FFECD8",
        brown : "#C49A6C",
        grey : {
          300 : '#D0D5DD'
        }
      },
      fontFamily : {
        inter : ['Inter', 'sans-serif;'],
        SansationLight : ['SansationLight'],
        SansationRegular : ['SansationRegular'],
        SansationBold : ['SansationBold']
      }
    },
  },
  plugins: [],
}

