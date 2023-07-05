import { useState } from "react"
import { bubbleSort } from "../../algorithms";
import { StyledDiv } from "./Visualizer.styles"
import { generate } from "../../utils";

export const Visualizer = () => {
  const [greenColor, setGreenColor] = useState<boolean>(false);
  const array = generate(5);
  console.log("array", array);
  console.log("movements", bubbleSort([4, 3, 2, 1]))
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
