/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8eef7',
          100: '#c5d4ec',
          200: '#9fb8e0',
          300: '#789bd4',
          400: '#5a85cb',
          500: '#3d6fbf',
          600: '#2d5fa8',
          700: '#1e4d8c',
          800: '#133b70',
          900: '#0a2952',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
