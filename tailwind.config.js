/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3273dc',
        secondary: '#ffdd57',
        dark: '#0a0a0a',
        light: '#f5f5f5',
        danger: '#ff3860',
        success: '#48c774',
      },
      fontFamily: {
        sans: ['Radikal', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
