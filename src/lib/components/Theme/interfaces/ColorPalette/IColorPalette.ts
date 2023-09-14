import { IColorGrade } from "../Color/IColorGrade";
import { IColorTypes } from "../Color/IColorTypes";
import { IColorVariant } from "../Color/IColorVariant";

export interface IColorPalette extends IColorTypes<
  IColorVariant & 
  IColorGrade<string>
  > {}
