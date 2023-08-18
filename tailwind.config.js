/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1600px',
      }
    }
  },
  plugins: [],
}

