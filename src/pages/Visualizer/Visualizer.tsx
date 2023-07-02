import { useState } from "react"
import { bubbleSort } from "../../algorithms";
import { StyledDiv } from "./Visualizer.styles"

export const Visualizer = () => {
  const [greenColor, setGreenColor] = useState<boolean>(false);
  console.log("movements", bubbleSort([4,3,2,1]))
  return (
    <StyledDiv 
      greenColor={greenColor}>
        <button onClick={() => setGreenColor(!greenColor)}>CHANGE COLOR</button>
        <p>
          Visualizer Page
        </p>     
    </StyledDiv>
  )
}
