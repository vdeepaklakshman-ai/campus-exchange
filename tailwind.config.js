/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#e0f2fe",
        accent: "#1e3a8a",
        dark: "#0f172a",
        light: "#f8fafc"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}