import { IAlgorithm, IMovement } from "../interfaces";
import { capture } from "../utils";
import '../utils/swap';

const bubbleSortExecutor = (array: number []) => {
  const movements: IMovement [] = [];
  const captureMove = capture(movements)
  let copyArray = [ ...array ];

  for(let i = 0; i < copyArray.length; i++){
    for(let j = i + 1; j < copyArray.length; j++){
      if(copyArray[i] > copyArray[j]){
        copyArray = copyArray.swap(i, j);
        captureMove(i, j, true)
      } else {
        captureMove(i, j, false)
      }
    }
  }
  return movements;
}

export const bubbleSortDef: IAlgorithm = {
  name: "Bubble Sort",
  complexity: "O(n ^ 2)",
  executor: bubbleSortExecutor,
}
