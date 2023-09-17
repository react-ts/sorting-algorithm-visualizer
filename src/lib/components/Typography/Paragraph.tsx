import styled from "@emotion/styled";
import { ITypoProps } from "./ITypoProps";

export const Paragraph = styled.p<ITypoProps<HTMLParagraphElement>>`
  box-sizing: border-box;
  margin: 0px; 

  ${({ theme, size, weight, textColor, capitalized, alignment, visible = true }: any) => {
    let styles = theme.typography.create({
      size,
      weight,
      alignment,
      color: textColor
    });

    if (capitalized) 
      styles += `text-transform: uppercase;`
    if (!visible) 
      styles += `display: none;`
    
    return styles;
  }};
`
