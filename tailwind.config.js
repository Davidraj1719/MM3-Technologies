/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        mm3: {
          blue: "#0756D9",
          light: "#168BFF",
          navy: "#10264C",
          pale: "#F4F8FF",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "fade-up": "fadeUp .8s ease both",
        "slow-spin": "spin 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-13px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(25px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};