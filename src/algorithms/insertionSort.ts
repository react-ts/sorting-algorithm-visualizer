import { IMovement } from "../interfaces";
import '../utils/swap'

export const insertionSort = (array: number[]) => {
  const movements: IMovement[] = [];
  for (let i = 1; i < array.length; i++) {
    let isSwap = false;
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && key < array[j]) {
      const movement: IMovement = { indexA: j, indexB: j + 1 }
      array = array.swap(j, j + 1);
      movements.push({
        ...movement,
        swap: true
      })
      j -= 1;
      isSwap = true;
    }
    array[j + 1] = key;
    const flag: IMovement = { indexA: j + 1, indexB: i }
    movements.push({
      ...flag,
      swap: isSwap
    });


  }
  return movements;

}

