import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
import oceanBeachTheme from "typography-theme-ocean-beach"
oceanBeachTheme.overrideThemeStyles = () => ({
    'a': {
      color: "#00BFFF",
      },
})


const typography = new Typography(oceanBeachTheme)

export const { scale, rhythm, options } = typography
export default typography