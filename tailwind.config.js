module.exports = {
  purge: [
     './resources/**/*.blade.php',
     './resources/**/*.js',
     './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
         'loose': '40px',
      },
    },
    fontFamily: {
      'body': ['Open Sans', 'sans-serif'], 
    },
    boxShadow: {
      DEFAULT: '0 1px 7px rgba(36,37,38,0.08)',
    },
    colors: {
      black: '#222222',
      'grey-darkest': '#4a4a4a',
      'grey-light': '#DEDEDE',
      'blue': '#1747b0',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
