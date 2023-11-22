module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'display': ['Rubik', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        change: "black",
      },
      width: {
        '95/100': '97%',
        'max-w-text' : '65ch',
      },
      height: {
        '96/100' : '96%',
      },
      position: {
        '2' : '5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
