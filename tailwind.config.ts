import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000",
        foreground: "#fff",
        primary: "#14B8A6",
        lightPrimary: "#CCFBF1",
        lightGrey: "#808080",
        darkGrey: "#2F2F2F",
        greyishBg: "#EDEDED",
        backgroundBlue: "#F7F9FC",
        blogCardBg: "#FBFBFB",
      },
      fontFamily: {
        poppinsThin: ["PoppinsThin", "sans-serif"],
        poppinsRegular: ["PoppinsRegular", "sans-serif"],
        poppinsSemibold: ["PoppinsSemibold", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
        montserratThin: ["MontserratThin", "sans-serif"],
        montserratRegular: ["MontserratRegular", "sans-serif"],
        montserratSemibold: ["MontserratSemibold", "sans-serif"],
        montserratBold: ["MontserratBold", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
