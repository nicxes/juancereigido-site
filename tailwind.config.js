const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      colors: {
        primary: '#012A3F',
        orange: '#F57421',
        cyan: '#405F6F',
        gray: '#405F6F',
        white: '#FAFAFA',
        black: '#181818',
        green: '#8AC926'
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        serif: ['Josefin Sans', 'serif'],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms')],
};
