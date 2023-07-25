import { IColorPalette } from "../interfaces/Color/IColorPalette";
import { IHslColor } from "../interfaces/Color/IHslColor";
import { IHslColorGrade } from "../interfaces/Color/IHslColorGrade";

export interface IFindHslColor {
  color: keyof IColorPalette,
  grade?: keyof IHslColorGrade<{}>,
}

const formatHslToCss = ({h, s, l}: IHslColor) => {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export const findPaletteColor = 
  (palette: IColorPalette) => 
  ({ color, grade }: IFindHslColor) => {
    switch(color){
      case 'black':
      case 'white':
        return formatHslToCss(palette[color]);
      default:
        return formatHslToCss(palette[color][grade ?? 100])
    }
  };
