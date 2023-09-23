import { IAlgorithm, IMovement } from "src/interfaces";
import { capture } from "../utils";

interface IHeapSortParams {
    array: number[],
    arrayLength: number,
    index: number,
    capture: ReturnType<typeof capture>
}

const heapify = ({ array, arrayLength, index, capture }: IHeapSortParams) => {
    let largest = index;
    const l = 2 * index + 1;
    const r = 2 * index + 2;

    if (l < arrayLength && array[l] > array[largest]) {
        largest = l
    }

    if (r < arrayLength && array[r] > array[largest]) {
        largest = r;
    }

    if (largest != index) {
        array.voidSwap(index, largest)
        capture(index, largest, true);
        heapify({ array, arrayLength, index: largest, capture });
    }
}

const heapSort = ({ array, capture }: Pick<IHeapSortParams, 'array' | 'capture'>) => {

    const arrayLength = array.length

    for (var i = Math.floor(arrayLength / 2) - 1; i >= 0; i--) {
        heapify({ array, arrayLength, index: i, capture });
    }

    for (var i = arrayLength - 1; i > 0; i--) {
        array.voidSwap(0, i);
        capture(0, i, true);
        heapify({ array, arrayLength: i, index: 0, capture });
    }
}


const heapSortExecutor = (array: number[]) => {

    const movements: IMovement[] = [];

    heapSort({ array, capture: capture(movements) })

    return movements

}

export const heapSortDef: IAlgorithm = {
    name: "Heap Sort",
    complexity: "O(n log(n))",
    executor: heapSortExecutor,
}
