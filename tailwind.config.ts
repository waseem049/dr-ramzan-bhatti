import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFCF9", // Warm off-white
        foreground: "#4A4238", // Warm dark grey/brown
        primary: "#D88D7F", // Muted Rose / Blush
        lightPrimary: "#F9ECE9", // Very light blush
        lightGrey: "#9CA3AF",
        darkGrey: "#2F2F2F",
        greyishBg: "#F5F0EB", // Warm beige
        backgroundBlue: "#FAF7F5", // Replacing blue with warm neutral
        blogCardBg: "#FFFFFF",
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
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        scaleIn: "scaleIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        pulseSlow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
