import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Scans all app files
  ],
  theme: {
    extend: {
      colors: {
        // === SKIN-TONE INSPIRED PALETTE ===
        // Designed for dermatology/skin care brand identity

        // Primary Brand Colors (Healthy Skin Tones)
        primary: {
          DEFAULT: "#D88D7F", // Warm rose - healthy skin glow
          50: "#FDF6F5",      // Lightest blush
          100: "#FBEEE9",     // Very light peachy
          200: "#F5D5CB",     // Light rose
          300: "#EFBDAD",     // Soft peach
          400: "#E5A595",     // Medium rose
          500: "#D88D7F",     // DEFAULT - Primary brand color
          600: "#C87565",     // Deeper rose
          700: "#B45E4F",     // Rich terracotta
          800: "#8F4A3F",     // Deep warm brown
          900: "#6B3730",     // Darkest brown
        },

        // Secondary Accent (Healthy Radiance)
        accent: {
          DEFAULT: "#EFCAC4",  // Soft pink - natural radiance
          light: "#F9ECE9",    // Barely there pink
          dark: "#E5B5AC",     // Deeper pink
        },

        // Neutral Skin Tones (Backgrounds & Text)
        skin: {
          lightest: "#FFFCF9", // Warm white (current background)
          lighter: "#FAF7F5",  // Soft cream
          light: "#F5F0EB",    // Warm beige
          base: "#F0E6DD",     // Medium beige
          medium: "#E8D9CC",   // Tan
          dark: "#4A4238",     // Warm dark brown (current foreground)
        },

        // Functional Colors (Semantic)
        success: "#A8C5A3",   // Soft sage green (healthy)
        warning: "#E8B475",   // Warm amber
        error: "#D88A8A",     // Muted coral red
        info: "#A8BDD4",      // Soft blue-grey

        // === LUXE v2.0 PALETTE ===
        luxe: {
          blue: "#1E40AF",    // Medical Blue (Trust)
          gold: "#D4AF37",    // Luxury Gold (Elegance)
          white: "#FEFAF6",   // Warm White (Background)
          charcoal: "#1F2937", // Headings (Charcoal)
          slate: "#64748B",   // Body text (Slate)
          pure: "#FFFFFF",    // Absolute White
        },

        // Legacy/Compatibility (mapped to new system)
        background: "#FFFCF9",      // skin.lightest
        foreground: "#4A4238",      // skin.dark
        lightPrimary: "#F9ECE9",    // accent.light
        lightGrey: "#9CA3AF",       // Keep for utility
        darkGrey: "#2F2F2F",        // Keep for utility
        greyishBg: "#F5F0EB",       // skin.light
        backgroundBlue: "#FAF7F5",  // skin.lighter
        blogCardBg: "#FFFFFF",      // Pure white
      },
      boxShadow: {
        'l1': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'l2': '0 10px 15px -3px rgba(100, 116, 139, 0.1), 0 4px 6px -2px rgba(100, 116, 139, 0.05)',
        'l3': '0 20px 25px -5px rgba(100, 116, 139, 0.15), 0 10px 10px -5px rgba(100, 116, 139, 0.1)',
        'l4': '0 25px 50px -12px rgba(148, 163, 184, 0.3)',
        'premium-glow': '0 0 15px rgba(212, 175, 55, 0.15)',
      },
      fontFamily: {
        poppinsThin: ["PoppinsThin", "sans-serif"],
        poppinsLight: ["PoppinsLight", "sans-serif"],
        poppinsRegular: ["PoppinsRegular", "sans-serif"],
        poppinsSemibold: ["PoppinsSemibold", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
        montserratThin: ["MontserratThin", "sans-serif"],
        montserratLight: ["MontserratLight", "sans-serif"],
        montserratRegular: ["MontserratRegular", "sans-serif"],
        montserratMedium: ["MontserratMedium", "sans-serif"],
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
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shine: {
          "0%": { transform: "translateX(-150%) skewX(12deg)" },
          "100%": { transform: "translateX(150%) skewX(12deg)" },
        },
        fadeInUpCustom: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInUpCustom: "fadeInUpCustom 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        scaleIn: "scaleIn 0.8s ease-out forwards",
        scaleInExpo: "scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        pulseSlow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 8s linear infinite",
        shine: "shine 1.5s ease-out",
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};

export default config;
