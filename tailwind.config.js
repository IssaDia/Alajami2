module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      maxHeight: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem'
      }
    },
    fontFamily: {
      'noticia' : ['Noticia Text'],
      'serif': ['"PT serif"'],
      'playfair': ['"Playfair Display serif"']
    }
  },
  variants: {},
  plugins: []
}
