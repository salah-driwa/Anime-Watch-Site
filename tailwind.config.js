/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  colors: {
      bgDark: '#1d1f26',
      secondary: '#1b1b1b',
      primary: '#fc8a5d',
      bg: '#282c37'
    },
  },
  },
  plugins: [],
}

