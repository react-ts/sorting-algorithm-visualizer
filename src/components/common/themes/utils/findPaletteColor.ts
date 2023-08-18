import { IColorGrade } from "../interfaces/Color";
import { IColorPalette } from "../interfaces/Color/IColorPalette";
import { IColorVariant } from "../interfaces/Color/IColorVariant";

export interface IFindColor {
  color: keyof IColorPalette,
  variant?: keyof IColorVariant,
  grade?: keyof IColorGrade<{}>,
}

export const findPaletteColor = 
  (palette: IColorPalette) => 
  ({ color, variant, grade }: IFindColor) => {
    switch(color){
      case 'black':
      case 'white':
        return palette[color];
      default:
        if(variant){
          return palette[color][variant];
        } else if (grade) {
          return palette[color][grade];
        } else {
          throw new Error("You must specify either a variant or grade.")
        }
    }
  };
