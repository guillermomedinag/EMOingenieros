/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emo-blue': '#3B82F6',
        'emo-orange': '#F97316',
      }
    },
  },
  plugins: [],
}
