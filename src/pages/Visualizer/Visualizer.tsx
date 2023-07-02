import { useState } from "react"
import { StyledDiv } from "./Visualizer.styles"

export const Visualizer = () => {
  const [greenColor, setGreenColor] = useState<boolean>(false);

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
