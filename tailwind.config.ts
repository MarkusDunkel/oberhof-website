import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f9f6f0",
        foreground: "#1f1a17",
        accent: "#5a6f48",
        sand: "#d9c8b4",
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
