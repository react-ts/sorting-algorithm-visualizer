import { IMovement } from "../interfaces";
import '../utils/swap'

export const bubbleSort = (array: number []) => {
  const movements: IMovement [] = [];
  
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      let movement: IMovement = { indexA: i, indexB: j };
      if(array[i] > array[j]){
        array = array.swap(i, j);
        movements.push({ 
          ...movement,
          swap: true
        })
      } else {
        movements.push({ 
          ...movement,
          swap: false 
        })
      }
    }
  }

  return movements;
}


