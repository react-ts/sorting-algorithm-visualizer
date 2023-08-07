import { useEffect, useState } from "react";
import { BarList } from "../../components/common/BarList/BarList";
import { useDelay } from "../../components/hooks";
import { IMovement } from "../../interfaces";

type Algorithm = (arr: number[]) => IMovement[]

interface IVisualizerParams {
  arr: number[]
  algorithm: Algorithm
  algorithmName: string
  playAnimation: boolean
}


export const Visualizer = ({ arr, algorithm, algorithmName, playAnimation }: IVisualizerParams) => {
  const [movement, setMovement] = useState<IMovement | null>(null)
  const [array] = useState<number[]>(arr);
  const delay = useDelay(1);



  useEffect(() => {

    const play = async () => {
      const movements = algorithm([...array]);
      for (let i = 0; i < movements.length; i++) {
        setMovement((currentState) => ({ ...currentState, ...movements[i] }))
        await delay()
      }
    }

    if (playAnimation) {
      play()
    }
  }, [playAnimation, algorithm, array, delay])


  return (
    <div>
      <div>
        <span>{algorithmName} sort {playAnimation ? "is playing" : ""}</span>
      </div>
      <div>
        <BarList
          collection={[...array]}
          movement={movement} />
      </div>
    </div>
  )
}
