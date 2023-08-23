/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pretendardB': ['PretendardBold'],
        'pretendardBB': ['PretendardBlack'],
        'pretendardR': ['PretendardThin']
      },
      colors: {
        'fff': '#FDFDFD',
        'gray100': '#86868B',
        'gray200': '#1e1e1e'
      },
    },
  },
  plugins: [],
}