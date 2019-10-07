import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  googleFonts: [
    {
      name: 'Domine',
      styles: [
        '400',
        '700',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '300',
        '300i',
        '400',
        '500',
        '700',
      ],
    },
    {
      name: 'Roboto Condensed',
      styles: [
        '400',
        '700'
      ],
    },
  ],
  headerFontFamily: [
    "Domine",
    "serif"
  ],
  bodyFontFamily: [
    "Roboto", 
    "sans-serif"
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      fontWeight: 400,
    },
    'li': {
      marginBottom: '1rem'
    },
  })
})
export const { scale, rhythm, options } = typography
export default typography