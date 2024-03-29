import { IAlgorithm, IMovement } from "../interfaces";
import { capture } from "../utils";
import '../utils/swap';

const insertionSortExecutor = (array: number[]) => {
  const movements: IMovement[] = [];
  const captureMove = capture(movements)
  let copyArray = [ ...array ];

  for (let i = 1; i < copyArray.length; i++) {
    let key = copyArray[i];
    let j = i - 1;
    while (j >= 0 && key < copyArray[j]) {
      copyArray = copyArray.swap(j, j + 1);
      captureMove(j, j + 1, true)
      j -= 1;
    }
    copyArray[j + 1] = key;
  }
  return movements;
}

export const insertionSortDef: IAlgorithm = {
  name: "Insertion Sort",
  complexity: "O(n ^ 2)",
  executor: insertionSortExecutor,
}
