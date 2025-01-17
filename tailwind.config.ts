import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: "var(--purple)",
      },
      backgroundImage: {
        purplegreen: "var(--bluegreen-gradient)",
        bluepurple: "var( --bluepurple-gradient)",
        yellowgreen: "var( --yellowgreen-gradient)",
      },
    },
  },
  plugins: [],
} satisfies Config;
