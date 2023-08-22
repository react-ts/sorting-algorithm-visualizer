import { IBaseColorPalette } from "../interfaces/Color/IBaseColorPalette"
import { IColorPalette } from "../interfaces/Color/IColorPalette"
import { createColors } from "./createColors"

export const createColorPalette = ({
  primary,
  secondary,
  success,
  warning,
  info,
  error,
}: IBaseColorPalette) => {
  return {
    primary: createColors(primary),
    secondary: createColors(secondary),
    success: createColors(success),
    warning: createColors(warning),
    error: createColors(error),
    info: createColors(info),
    black: "#000000",
    white: "#ffffff"
  } as IColorPalette
}
