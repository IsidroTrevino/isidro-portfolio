export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-at-bottom":
          "radial-gradient(circle 800px at bottom, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
