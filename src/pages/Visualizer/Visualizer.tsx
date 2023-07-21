import { useState } from "react"
import { Heading, Icon } from "../../components";
import { StyledDiv } from "./Visualizer.styles"

export const Visualizer = () => {
  const [greenColor, setGreenColor] = useState<boolean>(false);
  
  return (
    <>
      <StyledDiv
        greenColor={greenColor}>
        <button onClick={() => setGreenColor(!greenColor)}>CHANGE COLOR / CAPITALIZED</button>
        <Heading 
          as="h1"
          size="xl"
          weight="bolder"
          textColor={{ color: greenColor? 'success': 'error', grade: 900 }}
          capitalized={greenColor}>
            Visualizer Page, now on Firebase
        </Heading>

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
