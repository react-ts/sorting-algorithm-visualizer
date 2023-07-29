import { IHslColor } from "./IHslColor"
import { IHslColorGrade } from "./IHslColorGrade"

interface IBaseColor {
  base: IHslColor,
  adjustments?: IHslColorGrade<IHslColor>
}

export interface IBaseColorPalette {
  primary: IBaseColor,
  secondary: IBaseColor,
  ternary: IBaseColor,
  accent: IBaseColor,
  success: IBaseColor,
  warning: IBaseColor
  error: IBaseColor,
  black: IHslColor,
  white: IHslColor,
}
