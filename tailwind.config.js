/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "16xl": ["20rem", { lineHeight: "1" }],
      },
      colors: {
        "vox-yellow": "#fff200",
      },
      fontFamily: {
        vox: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
