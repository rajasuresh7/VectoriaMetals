/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Stylish: ["Stylish", "serif"],
      },
      clipPath: {
        polygon: "polygon(50% 0%, 100% 38%, 99% 100%, 50% 100%, 0 100%, 0 0)",
      },
      colors: {
        highlight_text: "#33d1cb",
        custom1: "rgba(9,165,206,1)",
        custom2: "rgba(29,186,205,1)",
        custom3: "rgba(48,206,203,1)",
      },
      backgroundColor: {
        "primary-bg": "#1f3b64",
      },
    },
  },
  plugins: [],
};
