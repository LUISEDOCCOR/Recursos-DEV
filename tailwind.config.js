/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cBlack: "#151515",
        cGrey: "#969696"

      }
    },
  },
  plugins: [],
}

