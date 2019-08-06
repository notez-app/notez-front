const colors = {
  black: '#040402',
  white: '#fffefc',
  merlin: '#37352f',
  gray: '#999999',
  merino: '#f5efe4',
  red: '#eb5757',
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fonts = {
  body:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;",
}

const fontSizes = [0, 5, 7, 9, 12, 16, 21, 28, 37, 50, 67, 89, 119, 159].map(
  (n) => `${n / 10}rem`
)

const fontWeights = [0, 300, 400, 500, 600, 700]

const borders = {
  merino: `1px solid ${colors.merino}`,
}

const buttons = {}

const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  borders,
  buttons,
}

export default theme
