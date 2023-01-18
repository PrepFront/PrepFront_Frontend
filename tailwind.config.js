/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#3F4CB0',
        secondaryColor: '#ef6037',
        background: '#F3F6F7',
        dashboard: '#3F4CB0',
      },
    },
  },
  plugins: [],
}
