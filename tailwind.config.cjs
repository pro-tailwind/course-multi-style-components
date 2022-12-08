const defaultTheme = require('tailwindcss/defaultTheme')
const stripesPlugin = require('./stripes-plugin.cjs')

module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), stripesPlugin],
}
