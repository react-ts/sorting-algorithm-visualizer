import { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ICreateTheme, ITheme } from "./interfaces/ITheme";
import { createTheme } from "./utils/createTheme";
import { defaultThemeValues } from "./values/defaultThemeValues";

interface IThemeProvider {
  customTheme?: ICreateTheme,
  children: ReactNode
}

export const ThemeProvider = ({ children, customTheme }: IThemeProvider) => {
  const theme = createTheme(customTheme ?? defaultThemeValues)
  return (
    <EmotionThemeProvider theme={theme as ITheme}>
      {children}
    </EmotionThemeProvider>)
}
 

