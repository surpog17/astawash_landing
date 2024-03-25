/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#143199", // Set your primary color
        secondary: "#0000A3", // Set your secondary color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
