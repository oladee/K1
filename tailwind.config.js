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
          50 : '#F9FAFB',
          100 : '#F0F2F5',
          200 : '#E4E7EC',
          300 : '#D0D5DD'
        },
        cardColor :  '#161616'
      },
      fontFamily : {
        inter : ['Inter', 'sans-serif;'],
        SansationLight : ['SansationLight'],
        SansationRegular : ['SansationRegular'],
        SansationBold : ['SansationBold']
      },
      backgroundImage : {
        design : "url('./src/assets/heroImg/design.png')",
        profit : "url('./src/assets/about/profit.png')"
      },
      keyframes : {
        scrollWatcher : {
          to : {scale : '1 1'}
        }
      }
    },
  },
  plugins: [],
}

