module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: "#E94444",
        blue: "#8EC2ED",
        gray: "#fafafa",
      },

      fontFamily: {
        mecha: ['"Mecha 08"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
