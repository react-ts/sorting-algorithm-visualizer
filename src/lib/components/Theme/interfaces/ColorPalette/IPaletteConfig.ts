import { IColorConfig } from "../Color/IColorConfig";
import { IColorTypes } from "../Color/IColorTypes";

export interface IPaletteConfig {
  light: Omit<IColorTypes<IColorConfig>, "white" | "black">,
  dark?: Partial<Omit<IColorTypes<IColorConfig>, "white" | "black">>
}
