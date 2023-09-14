import { IColorConfig, IColorTypes } from "../interfaces/Color";
import { createColors } from "./createColors";

export const createColorPalette = (colorsDefs: Omit<IColorTypes<IColorConfig>, "white" | "black">) => {
  const colors: any = {
    black: "#000000",
    white: "#ffffff",
    primary: undefined,
    secondary: undefined,
    success: undefined,
    warning: undefined,
    error: undefined,
    info: undefined,
    background: undefined,
  };

  Object.keys(colorsDefs).forEach((color) => {
    const index = color as keyof Omit<IColorTypes<IColorConfig>, "white" | "black">;
    if(index in colorsDefs){
      switch(index){
        case 'background':
          colors[color] = {
            default: createColors(colorsDefs[index]["default"])['main'],
            paper: createColors(colorsDefs[index]["paper"])['main']
          }
          break;
        default: 
          colors[color] = createColors(colorsDefs[index])
          break;
      }
    }     
  });
  
  return colors;
}
