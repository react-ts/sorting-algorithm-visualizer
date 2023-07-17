import { useState } from "react"
import { bubbleSort, insertionSort } from "../../algorithms";
import { StyledDiv } from "./Visualizer.styles"
import { generate } from "../../utils";
import { IconComponent } from "../../components";

export const Visualizer = () => {
  const [greenColor, setGreenColor] = useState<boolean>(false);
  const array = generate(5);
  console.log("array", array);
  console.log("movements", bubbleSort([4, 3, 2, 1]))
  console.log(insertionSort([1, 3, 8, 9, 7]));
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
