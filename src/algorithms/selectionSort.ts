import { IAlgorithm, IMovement } from "../interfaces";
import { capture } from "../utils";
import '../utils/swap';

const selectionSortExecutor = (array: number[]) => {
  const movements: IMovement[] = [];
  const captureMove = capture(movements)
  let copyArray = [...array];
  let size = copyArray.length;

  for (let i = 0; i < size - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < size; j++) {
      if (copyArray[j] < copyArray[min_idx]) {
        min_idx = j;
      }
      captureMove(min_idx,j,false);
    }
    copyArray.voidSwap(min_idx,i);
    captureMove(min_idx,i,true);
  }
  return movements;
}

export const selectionSortDef: IAlgorithm = {
  name: "Selection Sort",
  complexity: "O(n ^ 2)",
  executor: selectionSortExecutor,
}
