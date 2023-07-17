import { IHslColor } from "../interfaces/IHslColor";
import { IHslColorGrade } from "../interfaces/IHslColorGrade";

interface ICreateColorGrades {
  base: IHslColor,
  adjustments?: Partial<IHslColorGrade<IHslColor>>
}

export const createColorGrades = ({
  base,
  adjustments,
}: ICreateColorGrades): IHslColorGrade<IHslColor> => {
  const calculateGrade = (value: keyof IHslColorGrade<IHslColor>, diff: number = 0): IHslColor => {
    return { 
      ...{ ...base, ...adjustments?.[value] },
      l: (100 - (value / 10) + diff)  
    } as IHslColor;
  }

  return {
    100: calculateGrade(100),
    200: calculateGrade(200, 3),
    300: calculateGrade(300, 4),
    400: calculateGrade(400, 4),
    500: calculateGrade(500, 4),
    600: calculateGrade(600, 4),
    700: calculateGrade(700, 4),
    800: calculateGrade(800, 5),
    900: calculateGrade(900, 10),
  } as IHslColorGrade<IHslColor>
}
