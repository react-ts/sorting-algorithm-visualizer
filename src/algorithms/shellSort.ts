import { IMovement } from "../interfaces";
import { capture } from "../utils";
import '../utils/swap';

export const shellSort = (array: number []) => {
  const movements: IMovement [] = [];
  const captureMove = capture(movements)
  let copyArray = [ ...array ];
 
  let size = copyArray.length;

  for(let interval = Math.floor(size/2); interval > 0; interval = Math.floor(interval / 2)){
    for(let i = interval; i < size; i+=1){
      let temp = copyArray[i];
      let j;
      for( j = i; j >= interval && copyArray[j - interval] > temp; j -= interval){
        //copyArray[j] = copyArray[j - interval];
        copyArray = copyArray.swap(j, j - interval);
        captureMove(j,j - interval, true);
      }
      copyArray[j]  = temp;
      //copyArray = copyArray.swap(j,i);
      //captureMove(i,j,true);  
    }
  }
  return copyArray;
  //return movements;
}

