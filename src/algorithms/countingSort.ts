import { IAlgorithm, IMovement } from "src/interfaces";
import { capture } from "../utils";

interface ICountingSortParms {
   array: number[],
   capture: ReturnType<typeof capture>
}


const countingSort = ({ array, capture }: ICountingSortParms) => {

   if (array.length === 0) {
      return array;
   }

   let min = array[0];
   let max = array[0];
   for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
         min = array[i];
      }
      if (array[i] > max) {
         max = array[i];
      }
   }

   const count = new Array(max - min + 1).fill(0);
   const output = new Array(array.length);

   for (let i = 0; i < array.length; i++) {
      count[array[i] - min]++;
   }

   for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
   }

   const arrayCopy = [...array];

   for (let i = array.length - 1; i >= 0; i--) {
      const newPos = count[array[i] - min] - 1;
      output[newPos] = array[i];
      count[array[i] - min]--;

      //Begin of movement capture
      let value = array[i];
      let indexA = output.indexOf(value);
      let indexB = arrayCopy.indexOf(value);
      if (indexB !== indexA) {
         arrayCopy.voidSwap(indexA, indexB);
         capture(indexA, indexB, true);
      }
      else {
         capture(indexA, indexB, false);
      }
      //End of movement capture
   }
}

const countingSortExecutor = (array: number[]) => {

   const movements: IMovement[] = [];

   countingSort({ array, capture: capture(movements) })
   return movements
}

export const countingSortDef: IAlgorithm = {
   name: "Counting Sort",
   complexity: "O(n + k)",
   executor: countingSortExecutor,
}