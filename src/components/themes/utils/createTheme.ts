import { ICreateTheme, ITheme } from "../interfaces/ITheme";
import { createColorPalette } from "./createColorPalette";
import { findPaletteColor } from "./findPaletteColor";


export const createTheme = ({ palette }: ICreateTheme) : ITheme => {
  /*
   * Here we can add all custom rules we want to inherit across the components
   * ecosystem.
   */
  
  const colorPalette = createColorPalette(palette)
  return {
    palette: { ...colorPalette, find: findPaletteColor(colorPalette) }
  }
};
