/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06141B",
        primary: "#CCD0CF",
        secondary: "#4A5C6A",
        accent: "#48CFCB",
      },
    },
  },
  plugins: [],
};
