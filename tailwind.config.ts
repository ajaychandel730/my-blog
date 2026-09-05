import type { Config } from "tailwindcss";
const {heroui} = require("@heroui/theme");

const config: Config = {
    darkMode:"media",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,css,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heroBackground : "var(--hero-background)",
        midnight: {
        50: "oklch(98.5% 0.002 247.839 / <alpha-value>)",
        100: "oklch(96.7% 0.003 264.542 / <alpha-value>)",
        200: "oklch(92.8% 0.006 264.531 / <alpha-value>)",
        300: "oklch(87.2% 0.01 258.338 / <alpha-value>)",
        400: "oklch(70.7% 0.022 261.325 / <alpha-value>)",
        500: "oklch(55.1% 0.027 264.364 / <alpha-value>)",
        600: "oklch(44.6% 0.03 256.802 / <alpha-value>)",
        700: "oklch(37.3% 0.034 259.733 / <alpha-value>)",
        800: "oklch(27.8% 0.033 256.848 / <alpha-value>)",
        900: "oklch(21% 0.034 264.665 / <alpha-value>)",
        950: "oklch(13% 0.028 261.692 / <alpha-value>)",
      },
      },
    },
  },
  // darkMode : "class",
  // darkMode:"media",
  plugins: [heroui(), require("@tailwindcss/typography")],
};
export default config;
