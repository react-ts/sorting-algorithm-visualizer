import { HTMLAttributes } from "react"
import { Alignment, IFontSize, IFontWeight } from "../Theme/interfaces/Typography"
import { IFindColor } from "../Theme/utils/findPaletteColor"

export interface ITypoProps<T extends HTMLElement> extends HTMLAttributes<T> {
  size?: keyof IFontSize
  weight?: keyof IFontWeight,
  textColor?: IFindColor,
  alignment?: Alignment, 
  capitalized?: boolean,
  visible?: boolean
}
