import * as colors from '@mui/material/colors';
import { IColorGrade } from "./IColorGrade";
import { IColorVariant } from './IColorVariant';

export interface IColorConfig {
  base: keyof typeof colors | 'white' | 'black',
  adjustments?: {
    [variant in keyof IColorVariant]: keyof IColorGrade<string>
  }
}
