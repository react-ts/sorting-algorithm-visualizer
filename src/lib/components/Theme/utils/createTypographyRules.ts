
import { IColorPalette } from "../interfaces/ColorPalette/IColorPalette";
import { Alignment, IFontSize, IFontWeight, ITypography } from "../interfaces/Typography";
import { IFindColor, findPaletteColor } from "./findPaletteColor";

interface ICreateTypographyStyles {
  weight?: keyof IFontWeight,
  size?: keyof IFontSize,
  color?: IFindColor,
  textAlign?: Alignment 
}

export const createTypographyStyles =
  (palette: IColorPalette, initColor: IFindColor) => 
  (typography: ITypography) => ({
    weight = 'normal',
    size = 'md',
    color = undefined,
    textAlign = 'start'
  }: ICreateTypographyStyles) => {
    
    const {   
      family,
      weight: themeWeight,
      size: themeSize
    } = typography;

    const typographyColor = findPaletteColor(palette)(color ?? initColor)

    return `
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${family};
      font-size: ${themeSize[size]}px;
      font-weight: ${themeWeight[weight]};
      color: ${typographyColor};
      text-align: ${textAlign};
    `;
  }
