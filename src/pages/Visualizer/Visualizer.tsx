import { useState } from "react"
import { IconComponent } from "../../components";
import { StyledDiv } from "./Visualizer.styles"

export const Visualizer = () => {
  const [greenColor, setGreenColor] = useState<boolean>(false);
  return (
    <>
      <StyledDiv
        greenColor={greenColor}>
        <button onClick={() => setGreenColor(!greenColor)}>CHANGE COLOR</button>
        <p>
          Visualizer Page, now on Firebase
        </p>

      </StyledDiv>
      <div>
        <IconComponent icon="home" fontSize={32} color="blue" grade={100} opticalSize={23} />
      </div>
    </>
    

  )
}
