import { useState } from "react";
import { insertionSort, mergeSort } from "../../algorithms";
import { Icon } from "../../components";
import { BarList } from "../../components/common/BarList/BarList";
import { useDelay } from "../../components/hooks";
import { IMovement } from "../../interfaces";

export const Visualizer = () => {
  const [ insertionSortMovement, setInsertionSortMovement ] = useState<IMovement | null>(null)
  const [ mergeSortMovement, setMergeSortMovement ] = useState<IMovement | null>(null)
  const [ array ] = useState<number []>([ 5, 4, 14, 6, 10, 3, 2, 1, 12 ]);
  const delay = useDelay(1);
  
  const playInsertionSortAnimation = async () => {
    const movements = insertionSort(array.slice());
    for(let i = 0; i < movements.length; i++){
      setInsertionSortMovement((currentState) => ({ ...currentState, ...movements[i] }))
      await delay()
    }
  }

  const playMergeSortAnimation = async () => {
    const movements = mergeSort(array.slice());
    for(let i = 0; i < movements.length; i++){
      setMergeSortMovement((currentState) => ({ ...currentState, ...movements[i] }))
      await delay()
    }
  }

  return (
    <div>
      <div>
        <Icon 
          icon={'play_circle'}
          iconColor={{color: 'success', grade: 800}}
          size={45}
          onClick={playInsertionSortAnimation}  
        />
        <span>Start insertion sort</span>
      </div>
      <div>
        <BarList 
          collection={array.slice()}
          movement={insertionSortMovement} />
      </div>
      <div>
        <Icon 
          icon={'play_circle'}
          iconColor={{color: 'success', grade: 800}}
          size={45}
          onClick={playMergeSortAnimation}  
        />
        <span>Start merge sort</span>
      </div>
      <div>
        <BarList 
          collection={array.slice()}
          movement={mergeSortMovement} />
      </div>
    </div>
  )
}
