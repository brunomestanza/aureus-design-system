import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ordo-aureus/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  config,
  theme,
  createTheme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
