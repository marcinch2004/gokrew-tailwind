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
      },
      colors: {
        change: "black",
      },
      width: {
        '95/100': '97%',
      },
    },
  },
  variants: {},
  plugins: [],
};
