import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { IMovement } from "../../../interfaces";
import "../../../utils/swap";
import { Bar } from "../Bar/Bar";
import { StyledList } from "./BarList.styles";

export interface IBarList {
  array: number [],
  movement: IMovement | null,
  isSorted: boolean,
}

export const BarList = forwardRef(({ 
  array,
  movement,
  isSorted,
}: IBarList, ref: ForwardedRef<HTMLUListElement> ) => {
  const [ numbers, setNumbers ] = useState(array);
  const { indexA, indexB, swap } = movement ?? { indexA: -1, indexB: -1 };
  
  useEffect(() => {
    if(swap)
     setNumbers(numbers.swap(indexA, indexB))
  }, [ movement ])
 
  return (
    <StyledList ref={ref}>
      {
        numbers.map((value: number, index: number) => (
          <Bar  
            id={value.toString()}
            key={value}
            value={value}
            width={20}
            isSelected={indexB === index }
            isPivot={indexA === index}
            isSorted={isSorted}
          />
        ))
      }     
    </StyledList> 
  )
});
