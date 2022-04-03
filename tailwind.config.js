module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fonts: {
        Mulish: "Munlish,sans-serif",
        Roboto: "Roboto, sans-serif",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      menuAnimation: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
