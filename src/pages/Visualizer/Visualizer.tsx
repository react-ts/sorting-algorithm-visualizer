import { useState } from "react"
import { Icon } from "../../components";
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
        <Icon
          icon="home"
          iconType="outlined"
          iconColor={{ color: 'success', grade: 300 }}
          size={24}
          grade={100}
          opticalSize={100}
        />
      </div>
    </>
    

  )
}
