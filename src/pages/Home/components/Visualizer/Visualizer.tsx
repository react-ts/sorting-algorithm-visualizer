import { BarList, Heading } from "@components";
import { useAnimation, useDelay } from "@hooks";
import { useCallback, useEffect, useState } from "react";
import { IAlgorithm, IMovement } from "../../../../interfaces";
import { StyledPaper } from './Visualizer.styles';

interface IVisualizerParams {
  array: number[],
  delayTime: number,
  algorithm: IAlgorithm["executor"],
  showNumbers: boolean,
  algorithmName: string
  playAnimation: boolean
}

export const Visualizer = ({
  array,
  delayTime,
  algorithm,
  showNumbers,
  algorithmName,
  playAnimation,
}: IVisualizerParams) => {
  const [ movement, setMovement ] = useState<IMovement | null>(null)
  const [ isSorted, setSorted ] = useState<boolean>(false);
  const { ref } = useAnimation(delayTime);
  const delay = useDelay(delayTime);

  const startAnimation = useCallback(async(array: number []) => {
    const movements = algorithm([ ...array ]);

    for (let i = 0; i < movements.length; i++) {
      setMovement((currentState) => ({ ...currentState, ...movements[i] }))
      await delay()
    }

    setSorted(true);
    
  }, [algorithm, delay])

  useEffect(() => {
    if (playAnimation) startAnimation(array);
  }, [playAnimation, array, startAnimation])

  return (
    <StyledPaper
      variant='elevation'
      elevation={24} 
    >
      <div>
        <Heading as="h6" size="md">{algorithmName}</Heading>
      </div>
      <div>
        <BarList
          array={[...array]}
          movement={movement}
          isSorted={isSorted}
          showNumbers={showNumbers}
          ref={ref}
        />
      </div>
    </StyledPaper>
  )
}
