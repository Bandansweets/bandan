/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Scans your pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans your UI components
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C6A85A",
        dark: "#0A0A0A",
        softwhite: "#F8F8F8",
      },
    },
  },
  plugins: [],
}