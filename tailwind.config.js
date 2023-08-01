/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rgba-black-0.8": "rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
