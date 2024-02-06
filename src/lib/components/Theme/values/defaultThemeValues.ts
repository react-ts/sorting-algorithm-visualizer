import { IThemeConfig } from "../interfaces/ITheme";

export const defaultThemeValues: IThemeConfig = {
  palette: {
    light: {
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
      background: {
        default: {
          base: 'white',
        },
        paper: {
          base: 'white',
        }
      }
    }, 
    dark: {
      primary: {
        base: 'teal',
        adjustments: {
          main: 900,
          light: 900,
          dark: 900,
          contrastTest: 100 
        }
      },
      success: {
        base: 'lime',
        adjustments: {
          main: 500,
          light: 300,
          dark: 900,
          contrastTest: 100 
        }
      },
      background: {
        default: {
          base: 'blueGrey',
          adjustments: {
            main: 700,
            light: 200,
            dark: 900,
            contrastTest: 100
          }
        },
        paper: {
          base: 'blueGrey',
          adjustments: {
            main: 500,
            light: 200,
            dark: 900,
            contrastTest: 100
          }
        }
      }
    }, 
  },
  typography: {
    family: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ].join(', '),     
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
