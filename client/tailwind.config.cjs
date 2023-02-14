/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#f5f5f5",
      black: "#022b3a",
      grey: "#aea3b0",
      blue: "#1f7a8c",
      "blue-light": "#17c3b2",
      "violet": "#7209b7",
      "blue-dark": "#3a0ca3",
    },
    extend: {
      screens: {
        xs: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
      },
      boxShadow: {
        cardhover:
          "0 0 1px 0 rgba(189, 192, 207, 0.06), 0 10px 16px -1px rgba(189, 192, 207, 0.4)",
        card: "0 0 1px 0 rgba(189, 192, 207, 0.06), 0 10px 16px -1px rgba(189, 192, 207, 0.2)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "200%": "200%",
      },
      animation: {
        move: "move 30s infinite ease-in-out"
      },
      keyframes: {
        move: {
          "0%, 100%": { backgroundSize: "10%" },
          "50%": { backgroundSize: "100%"  },
        },
      }
    },
  },
  plugins: [],
};
