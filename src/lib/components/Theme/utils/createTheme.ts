import { createBreakpoints } from '@mui/system';
import { ITheme, IThemeConfig } from "../interfaces/ITheme";
import { createColorPalette } from "./createColorPalette";
import { createTypographyStyles } from "./createTypographyRules";
import { findPaletteColor } from "./findPaletteColor";

export const createTheme = ({
  palette: { light, dark },
  typography,
  breakpoints
 }: IThemeConfig,
  mode: 'light' | 'dark' = 'light') : ITheme => {
  /*
   * Here we can add all custom rules we want to inherit across the components
   * ecosystem.
   */
  
  const colorPalette = createColorPalette(mode === 'light' ? light : { ...light, ...dark } );
 
  return {
    palette: { ...colorPalette, find: findPaletteColor(colorPalette) },
    typography: { ...typography, create: createTypographyStyles(colorPalette, { color: mode === 'light' ? 'black' : 'white'})(typography) },
    breakpoints: createBreakpoints({
      values: {
        ...breakpoints
      }
    })
  }
};
