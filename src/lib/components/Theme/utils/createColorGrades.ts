import * as colors from '@mui/material/colors';
import { IColorGrade } from "../interfaces/Color/IColorGrade";

interface ICreateColorGrades {
  base: keyof typeof colors,
}

export const createColorGrades = ({ base }: ICreateColorGrades): IColorGrade<string> => {
  
  const calculateGrade = (grade: number): any => {
    return ((colors[base]) as any)[grade];
  }

  return {
    100: calculateGrade(100),
    200: calculateGrade(200),
    300: calculateGrade(300),
    400: calculateGrade(400),
    500: calculateGrade(500),
    600: calculateGrade(600),
    700: calculateGrade(700),
    800: calculateGrade(800),
    900: calculateGrade(900),
  } as IColorGrade<string>
}
