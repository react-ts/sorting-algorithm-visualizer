import { ICreateTheme } from "../interfaces/ITheme";

export const defaultThemeValues: ICreateTheme = {
  palette: {
    primary: {
      base: 'indigo',
      adjustments: {
        main: 500,
        light: 300,
        dark: 900,
        contrastTest: 100 
      }
    },
    secondary: {
      base: 'pink',
      adjustments: {
        main: 500,
        light: 300,
        dark: 900,
        contrastTest: 100 
      }
    },
    success: {
      base: 'green',
      adjustments: {
        main: 500,
        light: 300,
        dark: 900,
        contrastTest: 100 
      }
    },
    info: {
      base: 'blue',
      adjustments: {
        main: 500,
        light: 300,
        dark: 900,
        contrastTest: 100 
      }
    },
    warning: {
      base: 'amber',
      adjustments: {
        main: 500,
        light: 300,
        dark: 900,
        contrastTest: 100 
      }
    },
    error: {
      base: 'red',
      adjustments: {
        main: 500,
        light: 300,
        dark: 900,
        contrastTest: 100 
      }
    },
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
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};
