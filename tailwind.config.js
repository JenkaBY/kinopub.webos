module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      zIndex: {
        101: '101',
        999: '999',
      },
      colors: {
        red: {
          600: '#cf0652',
        },
      },
      spacing: {
        58: '14.5rem',
      },
      minHeight: {
        9: '2.25rem',
      },
    },
  },
  plugins: [],
};
