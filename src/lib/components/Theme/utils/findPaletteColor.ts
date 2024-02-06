import { IColorGrade, IColorTypes } from "../interfaces/Color";
import { IColorVariant } from "../interfaces/Color/IColorVariant";

export interface IFindColor {
  color: keyof IColorTypes<IColorVariant & IColorGrade<string>>,
  variant?: keyof IColorVariant,
  grade?: keyof IColorGrade<{}>,
}

export const findPaletteColor = 
  (palette: IColorTypes<IColorVariant & IColorGrade<string>>) => 
  ({ color, variant, grade }: IFindColor) => {
    switch(color){
      case 'black':
      case 'white':
        return palette[color];
      default:
        if(variant){
          return (palette as any)[color][variant];
        } else if (grade) {
          return (palette as any)[color][grade];
        } else {
          throw new Error("You must specify either a variant or grade.")
        }
    }
  };
