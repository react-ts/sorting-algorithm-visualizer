import { IMovement } from "../interfaces"
import { capture } from "../utils"

interface IMergeSortParams {
  array: number[],
  start: number,
  mid: number,
  end: number,
  capture: ReturnType<typeof capture>
}

const merge = ({ array, start, mid, end, capture }: IMergeSortParams) => {
  let i = start, j = mid + 1

  const arr = []

  while ((i <= mid) && (j <= end)) {
    if (array[i] <= array[j]) {
      arr.push(array[i++])
    } else {
      arr.push(array[j++])
    }
  }

  while (i <= mid) {
    arr.push(array[i++])
  }

  while (j <= end) {
    arr.push(array[j++])
  }

  const arrayCopy = array.slice()

  for (i = start; i <= end; i++) {
    const oldPosition = arrayCopy.indexOf(arr[i - start])
    const newPosition = arrayCopy.indexOf(arrayCopy[i])

    if (oldPosition !== newPosition) {
      arrayCopy.voidSwap(oldPosition, newPosition)
      capture(oldPosition, newPosition, true)
    }
    else {
      capture(oldPosition, newPosition, false)
    }
    array[i] = arr[i - start]
  }

}

const exec = ({ array, start, mid, end, capture }: IMergeSortParams) => {
  if (start >= end)
    return

  mid = Math.floor((start + end) / 2)
  exec({ array, start, mid, end: mid, capture })
  exec({ array, start: mid + 1, mid, end, capture })

  merge({ array, start, mid, end, capture })
}

export const mergeSort = (array: number[]) => {
  const movements: IMovement[] = [];
  const start = 0
  const end = array.length - 1
  const mid = Math.floor((start + end) / 2)

  exec({
    array,
    start,
    mid,
    end,
    capture: capture(movements)
  })

  return movements
}
