import { useState } from "react";
import { insertionSort } from "../../algorithms";
import { Icon } from "../../components";
import { BarList } from "../../components/common/BarList/BarList";
import { useDelay } from "../../components/hooks";
import { IMovement } from "../../interfaces";

export const Visualizer = () => {
  const [ movement, setMovement ] = useState<IMovement | null>(null)
  const [ array ] = useState<number []>([ 5, 4, 6, 10, 3, 2, 1 ]);
  const delay = useDelay(1);
  
  const playAnimation = async () => {
    const movements = insertionSort(array);
    for(let i = 0; i < movements.length; i++){
      setMovement((currentState) => ({ ...currentState, ...movements[i] }))
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
          onClick={playAnimation}  
        />
      </div>
      <div>
        <BarList 
          collection={array}
          movement={movement} />
      </div>
    </div>
  )
}
