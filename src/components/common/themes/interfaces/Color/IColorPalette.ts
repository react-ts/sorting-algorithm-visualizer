import { IColorGrade } from "./IColorGrade";
import { IColorVariant } from "./IColorVariant";

export interface IColorPalette {
  primary: IColorVariant & IColorGrade<string>,
  secondary: IColorVariant & IColorGrade<string>,
  error: IColorVariant & IColorGrade<string>,
  warning: IColorVariant & IColorGrade<string>,
  info: IColorVariant & IColorGrade<string>,
  success: IColorVariant & IColorGrade<string>,
  black: string
  white: string
}
