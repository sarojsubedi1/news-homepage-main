/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "Grayish-blue": "hsl(233, 8%, 79%)",
        "Dark-grayish-blue": "hsl(236, 13%, 42%)",
        "Off-white": "hsl(36, 100%, 99%)",
        "Very-dark-blue": "hsl(240, 100%, 5%)",
        "Soft-orange": " hsl(35, 77%, 62%)",
        "Soft-red": "hsl(5, 85%, 63%)",
      },
    },
  },
  plugins: [],
};
