/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        K2D: ["K2D", "sans-serif"],
      },
      fontFamily: {
        infant: ["Ysabeau Infant", "sans-serif"],
        fontWeight: {
          thin: 100,
          extralight: 200,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900,
        },
      },
      // fontFamily: {
      //   inter: ["Inter", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
