import * as colors from '@mui/material/colors';
import { IColorConfig } from "../interfaces/Color";
import { createColorGrades } from './createColorGrades';

export const createColors = (color: IColorConfig) => {
  
  const { base, adjustments } = color;
 
  switch(base){
    case "white":
    case "black": {
      const black = "#000000";
      const white = "#ffffff"
      return {
        main: base === "white" ? white : black,
        light: base === "white" ? white : black,
        dark: base === 'white' ? black : white,
        contrastTest: base === 'white' ? black : white
      }
    }
    default: {
      const bColor: any = colors[base];
      const { main, light, dark, contrastTest } = adjustments!;
      
      return {
        main: bColor[main] as string,
        light: bColor[light] as string,
        dark: bColor[dark] as string,
        contrastTest: bColor[contrastTest] as string,
        ...createColorGrades({ base })
      }
    }    
  }
}

