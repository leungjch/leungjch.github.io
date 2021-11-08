import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
import oceanBeachTheme from "typography-theme-ocean-beach"
oceanBeachTheme.overrideThemeStyles = () => ({
  a: {
    color: "#4C74B9",
  },
})

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  headerFontFamily: ["SourceSansPro"],
  bodyFontFamily: ["SourceSansPro"],
})
export const { scale, rhythm, options } = typography
export default typography
