import { Theme } from "@emotion/react";
import { findPaletteColor } from "../utils/findPaletteColor";
import { IBaseColorPalette } from "./IBaseColorPalette";
import { IColorPalette } from "./IColorPalette";

export interface ICreateTheme {
  palette: IBaseColorPalette,
}

export interface ITheme extends Theme {
  palette: IColorPalette & { find: ReturnType<typeof findPaletteColor> }
}
