import { IHslColor } from "./IHslColor";
import { IHslColorGrade } from "./IHslColorGrade";

export interface IColorPalette {
  primary: IHslColorGrade<IHslColor>,
  secondary: IHslColorGrade<IHslColor>,
  ternary: IHslColorGrade<IHslColor>,
  accent: IHslColorGrade<IHslColor>,
  success: IHslColorGrade<IHslColor>,
  warning: IHslColorGrade<IHslColor>
  error: IHslColorGrade<IHslColor>,
  black: IHslColor,
  white: IHslColor,
}
