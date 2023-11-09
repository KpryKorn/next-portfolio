import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-light": "#FCFCFC",
        "black-light": "#202020",
        "gray-light": "#646464",
        "bg-dark": "#0A0A0A",
        "white-dark": "#FFFFFF",
        "gray-dark": "#9CA3AF",
      },
    },
  },
  plugins: [],
};
export default config;
