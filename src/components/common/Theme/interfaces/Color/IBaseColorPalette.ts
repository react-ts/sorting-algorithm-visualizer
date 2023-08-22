import * as colors from '@mui/material/colors';
import { IColorGrade } from "./IColorGrade";
import { IColorVariant } from './IColorVariant';

export interface IBaseColor {
  base: keyof typeof colors,
  adjustments: {
    [variant in keyof IColorVariant]: keyof IColorGrade<string>
  }
}

export interface IBaseColorPalette {
  primary: IBaseColor,
  secondary: IBaseColor,
  info: IBaseColor,
  success: IBaseColor,
  warning: IBaseColor
  error: IBaseColor,
}
