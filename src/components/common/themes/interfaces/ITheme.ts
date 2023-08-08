import { Theme } from "@emotion/react";
import { findPaletteColor } from "../utils/findPaletteColor";
import { IBaseColorPalette } from "./Color/IBaseColorPalette";
import { IColorPalette } from "./Color/IColorPalette";
import { ITypography } from "./Typography/ITypography";
import { createTypographyStyles } from "../utils/createTypographyRules";
import {  BreakpointsOptions } from "@mui/system";

export interface ICreateTheme {
  palette: IBaseColorPalette,
  typography: ITypography,
  breakpoints: BreakpointsOptions
}

export interface ITheme extends Theme {
  palette: IColorPalette & { find: ReturnType<typeof findPaletteColor> }
  typography: ITypography & { create: ReturnType<ReturnType<typeof createTypographyStyles>> }
  breakpoints: BreakpointsOptions
}
