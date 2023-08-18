import { Theme } from "@emotion/react";
import { Breakpoints, BreakpointsOptions } from "@mui/system";
import { createTypographyStyles } from "../utils/createTypographyRules";
import { findPaletteColor } from "../utils/findPaletteColor";
import { IBaseColorPalette } from "./Color/IBaseColorPalette";
import { IColorPalette } from "./Color/IColorPalette";
import { ITypography } from "./Typography/ITypography";

export interface ICreateTheme {
  palette: IBaseColorPalette,
  typography: ITypography,
  breakpoints: Breakpoints["values"]
}

export interface ITheme extends Theme {
  palette: IColorPalette & { find: ReturnType<typeof findPaletteColor> }
  typography: ITypography & { create: ReturnType<ReturnType<typeof createTypographyStyles>> }
  breakpoints: BreakpointsOptions
}
