import { renderUrlImage } from "./utils/log-helper";
import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-demo": renderUrlImage("/assets/images/bg_vuqy_demo.png"),
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      "font-iCeil": ["iCiel Crocante", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
