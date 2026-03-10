/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#fff9f0",
        waxSeal: "#b22222",
      },
    },
  },
  plugins: [],
}