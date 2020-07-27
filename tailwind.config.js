module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    fontFamily: {
      body: ['Muli', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
      },
      margin: {},
      inset: {},
      spacing: {},
      width: {
        'max-content': 'max-content',
      },
      inset: {
        '25%': '25%',
      },
      padding: {},
      height: {},
    },
  },
  variants: {
    backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
    textColor: [
      'dark',
      'dark-hover',
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
    ],
    borderColor: ['dark'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
};
