import { IAlgorithm, IMovement } from "../interfaces";
import { capture } from "../utils";
import '../utils/swap';

const cocktailSortExecutor = (array: number[]) => {
  const movements: IMovement[] = [];
  const captureMove = capture(movements)
  let copyArray = [...array];
  let swapped = true;
  let start = 0;
  let end = copyArray.length;

  while (swapped == true) {
    swapped = false;
    for (let i = start; i < end - 1; i++) {
      if (copyArray[i] > copyArray[i + 1]) {
        copyArray = copyArray.swap(i, i + 1);
        swapped = true;
        captureMove(i, i + 1, true)
      } else {
        captureMove(i, i + 1, false)
      }
    }
    if (swapped == false)
      break;

    swapped = false;
    end = end - 1;

    for (let i = end - 1; i >= start; i--) {
      if (copyArray[i] > copyArray[i + 1]) {
        copyArray = copyArray.swap(i, i + 1);
        swapped = true;
        captureMove(i, i + 1, true)
      } else {
        captureMove(i, i + 1, false)
      }
    }
    start = start + 1;
  }
  return movements;
}

export const cocktailSortDef: IAlgorithm = {
  name: "Cocktail Sort",
  complexity: "O(n ^ 2)",
  executor: cocktailSortExecutor,
}
