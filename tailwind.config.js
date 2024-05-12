/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        cream : "#FFECD8;"
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

