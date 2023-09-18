/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  './src/components/**/*.{html,jsx,js}'
],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans'],
      },
    },
  },
  plugins: [],
}

