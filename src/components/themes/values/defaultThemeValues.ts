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
  }
}
