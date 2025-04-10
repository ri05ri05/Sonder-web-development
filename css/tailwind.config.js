module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // enables dark mode via a class on the root element
  theme: {
    extend: {
      colors: {
        primary: "#0077B6",
        accent: "#F76C5E",
        highlight: "#FFB703",
        light: "#FDF6EC",
        dark: "#1E1E2F",
      },
    },
  },
  plugins: [],
};
