import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { createTheme as createMaterialUiTheme } from '@mui/material';
import { ReactNode } from "react";
import { ITheme, IThemeConfig } from "./interfaces/ITheme";
import { createTheme } from "./utils/createTheme";
import { defaultThemeValues } from "./values/defaultThemeValues";

interface IThemeProvider {
  mode?: 'light' | 'dark'
  customTheme?: IThemeConfig,
  children: ReactNode
}

export const ThemeProvider = ({ 
  mode = "light",
  children,
  customTheme,
}: IThemeProvider) => {

  const { 
    palette: muiPalette,
    typography: muiTypography,
     ...muiRestStyle
  } = createMaterialUiTheme({ palette: { mode }});
  
  const { 
    palette: csmPalette,
    typography: csmTypography,
    ...cstRestStyle 
  } = createTheme(customTheme ?? defaultThemeValues, mode);

  const theme = {
    ...muiRestStyle,
    ...cstRestStyle,
    palette: { ...muiPalette, ...csmPalette },
    typography: {...muiTypography, ...csmTypography }
  }
  
  return (
    <EmotionThemeProvider theme={theme as ITheme}>
      {children}
    </EmotionThemeProvider>)
}
 

