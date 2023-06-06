/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      background: "#1E1E1E",
      text: "#797979",
      headingtext: "#DFDFDF",
      accent: "#7B8DA3",
      navigation: "#303030",
      panel: "#191919",
      panel2: "#1c1c1c",
    },
  },
  plugins: [],
};
