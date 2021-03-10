module.exports = {
  purge: {
    // enabled: true,
    content: [
      './src/handlebars/**/*'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1.5rem'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
