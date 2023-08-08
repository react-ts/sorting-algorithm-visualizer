import { createBreakpoints } from "@mui/system";
import { ICreateTheme } from "../interfaces/ITheme";

export const defaultThemeValues: ICreateTheme = {
  palette: {
    primary: {
      base: { h: 195, s: 76.19, l: 16.47 },
    },
    secondary: {
      base: { h: 189.23, s: 64.54, l: 27.65 },
    },
    ternary: {
      base: { h: 185.67, s: 55.46, l: 44.9 },
    },
    accent: {
      base: { h: 68.52, s: 75.61, l: 59.8 },
    },
    success: {
      base: { h: 78.9, s: 57.48, l: 49.8 },
    },
    warning: {
      base: { h: 52.24, s: 100, l: 10 },
    },
    error: {
      base: { h: 0, s: 100, l: 10 },
    },
    white: { h: 0, s: 100, l: 100 },
    black: { h: 0, s: 100, l: 0 },
  },
  typography: {
    family:
      `Roboto, -apple-system, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
       Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    size: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
    },
    weight: {
      thin: 300,
      normal: 400,
      bold: 500,
      bolder: 700
    }
  },
  breakpoints: createBreakpoints({
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  })

}
