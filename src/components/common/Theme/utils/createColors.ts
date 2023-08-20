import * as colors from '@mui/material/colors';
import { IBaseColor, IColorGrade } from "../interfaces/Color";
import { IColorVariant } from "../interfaces/Color/IColorVariant";
import { createColorGrades } from './createColorGrades';

export const createColors = (color: IBaseColor) : (IColorVariant & IColorGrade<string>) => {
  
  const {
    base, 
    adjustments: {
      main,
      light,
      dark,
      contrastTest
    }
  } = color;

  const muiColorObj: any = colors[base];

  return {
    main: muiColorObj[main] as string,
    light: muiColorObj[light] as string,
    dark: muiColorObj[dark] as string,
    contrastTest: muiColorObj[contrastTest] as string,
    ...createColorGrades({ base })
  }
}
