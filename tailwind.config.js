/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      xmd: "850px",
      lg: "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "rgba-black-0.8": "rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
