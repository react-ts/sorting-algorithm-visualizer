import { IMovement } from "../interfaces"
import { capture } from "../utils"

interface IMergeSortParams {
  array: number [],
  start: number, 
  mid: number,
  end: number,
  capture: ReturnType<typeof capture>
}

const merge = ({ array, start, mid, end, capture }: IMergeSortParams) => {
    let i = start, j = mid + 1

    const arr = [] 

    while((i <= mid) && (j <= end)){
        if(array[i] <= array[j]){
          capture(i, arr.length, true)
            arr.push(array[i++])
        } else {
          capture(j, arr.length, true)
            arr.push(array[j++])
        }
    }

    while(i <= mid){
        capture(i, arr.length, true)
        arr.push(array[i++])
    }

    while(j <= end){
        capture(j, arr.length, true)
        arr.push(array[j++])

    }
    
    for(i=start;i<=end;i++){
        array[i] = arr[i - start]
        //capture(i - start, i, true)
    }

}

const exec = ({ array, start, mid, end, capture }: IMergeSortParams) => {
    if(start >= end) 
        return 

    mid = Math.floor((start + end) / 2)
    exec({array, start, mid, end: mid, capture})
    exec({array, start: mid + 1, mid, end, capture}) 
    
    merge({array, start, mid, end, capture})
}

const mergeSort = (array: number[]) => {
    const movements: IMovement[] = [];
    const arrayCopy = array.slice()
    const start = 0
    const end = array.length - 1
    const mid = Math.floor((start + end) / 2)

    exec({ 
      array: arrayCopy,
      start,
      mid,
      end,
      capture: capture(movements) 
    })

    return movements
}

export default mergeSort
