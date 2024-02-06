import { shuffle } from "lodash"

export const generate = (arrayLength: number): number[] => 
  shuffle(Array.from({length: arrayLength}, (_, i) => i + 1))
  
