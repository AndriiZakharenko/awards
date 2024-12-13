import { fonts } from "./src/constants/fonts";
import { colors } from "./src/constants/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: fonts,
      colors: colors,
    },
  },
  plugins: [],
};
