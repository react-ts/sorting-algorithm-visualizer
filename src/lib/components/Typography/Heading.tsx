import styled from "@emotion/styled";
import { ITypoProps } from "./ITypoProps";

export const Heading = styled.h1<ITypoProps<HTMLHeadingElement>>`
  box-sizing: border-box;
  margin: 0px;

  ${({ theme, size, weight, textColor, capitalized, alignment }: any) => {
    let styles = theme.typography.create({
      size,
      weight,
      alignment,
      color: textColor
    });

    if (capitalized) 
      styles += `text-transform: uppercase;`
    
    return styles;
  }};
`
