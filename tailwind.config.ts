import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: "'Lexend', sans-serif",
        body: "'Inter', sans-serif",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        primary: "#4A6CF7",
        "dark-text": "#79808A",
        dark: "#111722",
        stroke: "#e5e7eb",
        // newly added colors
        heroGradient:
          "radial-gradient(rgba(76, 69, 141, 0.299) 0%, rgba(17, 38, 76, 0.067) 100%)",
        athensGray: "rgba(229, 231, 235, 1)",
        cornflowerBlue: "rgba(74, 108, 247, 1)",
        cornflowerBlue90: "rgba(74, 108, 247, 0.9)",
        ebony: "rgba(17, 24, 39, 1)",
        ebonyClay: "rgba(44, 52, 67, 1)",
        denovoPink: "rgb(76,69,141)",
        denovoDarkblue: "rgb(12,26,53)",
        denovoYellow: "rgb(252,215,65)",
      },
      screens: {
        sm: "540px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1140px",
        // => @media (min-width: 1200px) { ... }

        "2xl": "1320px",
        // => @media (min-width: 1400px) { ... }
      },
      extend: {
        screens: {
          xs: "500px",
        },
        backgroundImage: {
          "noise-pattern": "url('../images/NoisePattern.svg')",
        },
        dropShadow: {
          light: "drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
