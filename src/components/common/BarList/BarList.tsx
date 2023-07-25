import { memo, useEffect, useState } from "react";
import { IMovement } from "../../../interfaces";
import "../../../utils/swap";
import { useAnimation } from "../../hooks";
import { Bar } from "../Bar";
import { StyledList } from "./BarList.styles";

export interface IBarList {
  collection: number [],
  movement: IMovement | null
}

export const BarList = memo(({ collection, movement }: IBarList) => {
  const [ numbers, setNumbers ] = useState(collection);
  const { indexA, indexB, swap } = movement ?? { indexA: -1, indexB: -1 };
  const { ref } = useAnimation<HTMLUListElement>()
  
  useEffect(() => {
    if(swap) setNumbers(numbers.swap(indexA, indexB))
  }, [movement])
 
  return (
    <StyledList ref={ref}>
      {
        numbers.map((value: number, index: number) => (
          <Bar  
            id={value.toString()}
            key={value}
            isSelected={indexB === index }
            isPivot={indexA === index}
            value={value}
            width={20}
          />
        ))
      }     
    </StyledList> 
  )
});
