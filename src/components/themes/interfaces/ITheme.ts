import { Theme } from "@emotion/react";
import { findPaletteColor } from "../utils/findPaletteColor";
import { IBaseColorPalette } from "./Color/IBaseColorPalette";
import { IColorPalette } from "./Color/IColorPalette";
import { ITypography } from "./Typography/ITypography";
import { createTypographyStyles } from "../utils/createTypographyRules";

export interface ICreateTheme {
  palette: IBaseColorPalette,
  typography: ITypography,
}

export interface ITheme extends Theme {
  palette: IColorPalette & { find: ReturnType<typeof findPaletteColor> }
  typography: ITypography & { create: ReturnType<ReturnType<typeof createTypographyStyles>> }
}
