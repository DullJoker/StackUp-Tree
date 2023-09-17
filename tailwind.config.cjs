/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["halloween"],
  },
  theme: {
    extend: {
      colors: {
        MainWhite: "rgba(255,255,255,1)",
        MainRed: "rgba(191,30,46,1)",
        MainBlack: "rgba(0,0,0,1)",
        MainDarkGray: "#0e0e0e",
      },
    },
  },
  plugins: [require("daisyui")],
};
