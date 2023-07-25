import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { IColorPalette } from "../themes/interfaces/Color";

export interface IBarProps extends HTMLAttributes<HTMLUListElement>{
  isPivot: boolean,
  isSelected: boolean,
  value: number,
  width?: number,
}

const defineColors = ({ theme, isSelected, isPivot }: any) => {
  let styles = "";
  const buildStyle = (colorName: keyof IColorPalette, grade?: number) => (`
    background-color: ${theme.palette.find({color: colorName, grade: grade ? grade : 700 })};
    border: 2px solid ${({ theme }: any) => theme.palette.find({ color: colorName, grade: 900 })};
  `)

  if(isPivot)
    styles += buildStyle('warning');
  else if (isSelected)
    styles += buildStyle('success');
  else 
    styles += buildStyle('primary', 100);

  return styles;
}
//transition: transform .2s ease-in;
export const Bar = styled.li<IBarProps>`
  box-sizing: border-box;
  margin-right: 1px;
  border-radius: 0px 0px 3px 3px;
  height: ${({ value }) => value * 15 }px;
  width: ${({ width }) => width ? width : '35'}px;
  ${({ theme, isSelected, isPivot }) => defineColors({
    theme,
    isSelected,
    isPivot
  })};
`
