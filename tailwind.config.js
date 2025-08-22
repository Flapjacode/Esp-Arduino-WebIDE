/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e2f",
        secondary: "#2c2c3e",
        accent: "#3b82f6",
      },
    },
  },
  plugins: [],
};
