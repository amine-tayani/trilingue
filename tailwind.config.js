/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monstserrat: ["Montserrat", "sans-serif"],
        meowscript: ["Meow Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        lemonmilk: ["LEMONMILK", "sans-serif"],
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0,1fr))",
      },
    },
  },
  plugins: [],
};
