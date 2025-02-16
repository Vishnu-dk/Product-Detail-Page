export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          100: '#f7f7f7',
          200: '#e5e5e5',
          300: '#999999',
          400: '#666666',
          500: '#333333',
        }
      }
    },
  },
  plugins: [],
}