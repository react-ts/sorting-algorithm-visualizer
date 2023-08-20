import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { createTheme as createThemeMui } from '@mui/material';
import { ReactNode } from "react";
import { ICreateTheme, ITheme } from "./interfaces/ITheme";
import { createTheme } from "./utils/createTheme";
import { defaultThemeValues } from "./values/defaultThemeValues";

interface IThemeProvider {
  customTheme?: ICreateTheme,
  children: ReactNode
}

export const ThemeProvider = ({ children, customTheme }: IThemeProvider) => {
  const { palette: muiPalette, typography: muiTypography, ...muiRestStyle } = createThemeMui();
  const { palette: csmPalette, typography: csmTypography, ...cstRestStyle } = createTheme(customTheme ?? defaultThemeValues);

  const theme = {
    ...muiRestStyle,
    ...cstRestStyle,
    palette: { ...muiPalette, ...csmPalette },
    typography: {...muiTypography, ...csmTypography}
  }

 
  return (
    <EmotionThemeProvider theme={theme as ITheme}>
      {children}
    </EmotionThemeProvider>)
}
 

