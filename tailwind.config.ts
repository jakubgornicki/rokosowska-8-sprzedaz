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
        navy: {
          900: "#1a1a2e",
          800: "#16213e",
          700: "#0f3460",
          600: "#0d4f8b",
          500: "#0b4880",
          400: "#0a3f70",
          300: "#094060",
          200: "#1a5276",
        },
      },
    },
  },
  plugins: [],
};

export default config;
