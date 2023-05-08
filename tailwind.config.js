/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
