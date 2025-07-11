// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',     // App directory
    './pages/**/*.{js,ts,jsx,tsx,mdx}',   // Pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Components
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}
