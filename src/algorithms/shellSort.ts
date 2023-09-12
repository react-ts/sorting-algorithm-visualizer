import { IAlgorithm, IMovement } from "../interfaces";
import { capture } from "../utils";
import '../utils/swap';

const shellSortExecutor = (array: number[]) => {
  const movements: IMovement[] = [];
  const captureMove = capture(movements)
  let copyArray = [...array];

  let size = copyArray.length;

  for (let interval = Math.floor(size / 2); interval > 0; interval = Math.floor(interval / 2)) {
    for (let i = interval; i < size; i += 1) {
      let temp = copyArray[i];
      let j;
      for (j = i; j >= interval && copyArray[j - interval] > temp; j -= interval) {
        copyArray.voidSwap(j, j - interval);
        captureMove(j, j - interval, true);
      }
      const np = copyArray.indexOf(temp);
      copyArray.voidSwap(j, np);
      captureMove(j, np, true);
    }
  }
  return movements;
}

export const shellSortDef: IAlgorithm = {
  name: "Shell Sort",
  complexity: "O(n ^ 2)",
  executor: shellSortExecutor,
}
