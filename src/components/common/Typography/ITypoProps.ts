import { HTMLAttributes } from "react"
import { Alignment, IFontSize, IFontWeight } from "../themes/interfaces/Typography"
import { IFindColor } from "../themes/utils/findPaletteColor"

export interface ITypoProps<T extends HTMLElement> extends HTMLAttributes<T> {
  size?: keyof IFontSize
  weight?: keyof IFontWeight,
  textColor?: IFindColor,
  alignment?: Alignment, 
  capitalized?: boolean 
}
