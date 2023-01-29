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
        dashboard: '#3F4CB0',
        background: '#F3F6F7',
        accent: '#3F4CB0',
        lightAccent: '#A3A5F9'
      },
      screens: {
        'xs': '390px',
      },
    },
  },
  plugins: [],
}
