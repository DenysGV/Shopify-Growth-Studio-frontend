/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111111', // Основной цвет
          Light: '#1E1E1E'
        },
        secondary: '#D0FA53', // Одиночный цвет
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}