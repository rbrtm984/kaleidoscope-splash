/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.tsx', './src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['ui-sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}

