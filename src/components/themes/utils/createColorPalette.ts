import { IBaseColorPalette } from "../interfaces/IBaseColorPalette"
import { IColorPalette } from "../interfaces/IColorPalette"
import { createColorGrades } from "./createColorGrades"

export const createColorPalette = ({
  primary,
  secondary,
  ternary,
  accent,
  success,
  warning,
  error,
  black,
  white
}: IBaseColorPalette) => {
  return {
    primary: createColorGrades(primary),
    secondary: createColorGrades(secondary),
    ternary: createColorGrades(ternary),
    accent: createColorGrades(accent),
    success: createColorGrades(success),
    warning: createColorGrades(warning),
    error: createColorGrades(error),
    black: black,
    white: white
  } as IColorPalette
}
