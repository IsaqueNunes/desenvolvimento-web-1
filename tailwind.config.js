module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    cursor: ["last"],
    margin: ["last"],
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
