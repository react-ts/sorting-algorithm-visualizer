import { BarList, Heading } from "@components";
import { useAnimation, useDelay } from "@hooks";
import { memo, useCallback, useEffect, useState } from "react";
import { IAlgorithm, IMovement } from "../../../../interfaces";
import { StyledPaper } from './Visualizer.styles';

interface IVisualizerParams {
  array: number[],
  delayTime: number,
  algorithmDef: IAlgorithm
  play: boolean
}

export const Visualizer = memo(({
  play,
  array,
  delayTime,
  algorithmDef,
}: IVisualizerParams) => {
  const [ movement, setMovement ] = useState<IMovement | null>(null)
  const [ isSorted, setSorted ] = useState<boolean>(false);
  const { ref } = useAnimation({ seconds: delayTime, requestAnimFrame: play });
  const { name, complexity, executor } = algorithmDef;
  const delay = useDelay(delayTime);

  const startAnimation = useCallback(async(array: number []) => {
    const movements = executor([ ...array ]);

    for (let i = 0; i < movements.length; i++) {
      setMovement((currentState) => ({ ...currentState, ...movements[i] }))
      await delay()
    }

    setSorted(true);
    
  }, [executor, delay]);

  useEffect(() => {
    if (play) startAnimation(array);
  }, [play, array, startAnimation])

  return (
    <StyledPaper
      variant='elevation'
      elevation={24} 
    >
      <div>
        <Heading as="h6" size="lg">{name}</Heading>
        <Heading as='h6' size="md">Complexity: {complexity}</Heading>
      </div>
      <div>
        <BarList
          array={[ ...array ]}
          movement={movement}
          isSorted={isSorted}
          ref={ref}
        />
      </div>
    </StyledPaper>
  )
})
