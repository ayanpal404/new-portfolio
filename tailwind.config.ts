// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}", // App directory
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Components
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
