import { IMovement } from "../interfaces";
import { capture } from "../utils";
import '../utils/swap';

interface IQuickSortParams {
  array: number [],
  start: number, 
  end: number,
  capture: ReturnType<typeof capture>
}

const partition = ({ array, start, end, capture }: IQuickSortParams) => {
  const pivot = array[end]; 
  let i = start, j = start;
  
  for(j = start; j < end; j++){
    if(array[j] < pivot){
      array.voidSwap(i, j)
      capture(i, j, true)
      i++;
    } else {
      capture(i, j, false)
    }
  }

  array.voidSwap(i, end) 
  capture(i, end, true)
  return i;
}

const exec = ({ array, start, end, capture }: IQuickSortParams) => {
  if(start < end){
    const pivot = partition({
      array,
      start,
      end,
      capture
    });

    exec({ array, start, end: pivot - 1, capture });
    exec({ array, start: pivot + 1, end, capture });
  }
}

export const quickSort = ({ array }: Pick<IQuickSortParams, "array">) => {
  const movements: IMovement[] = [];

  exec({ 
    array,
    start: 0,
    end: array.length - 1,
    capture: capture(movements) 
  });

  return movements;
}
