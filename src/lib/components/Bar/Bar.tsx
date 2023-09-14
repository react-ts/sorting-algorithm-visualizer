import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { IColorPalette } from "../Theme/interfaces/ColorPalette";

export interface IBarProps extends HTMLAttributes<HTMLUListElement>{
  isPivot: boolean,
  isSelected: boolean,
  isSorted: boolean,
  value: number,
  width?: number,
  showNumbers?: boolean,
}

const defineColors = ({ theme, isSelected, isPivot, isSorted }: any) => {
  let styles = "";

  const buildStyle = (colorName: keyof IColorPalette, grade?: number) => `
    background-color: ${theme.palette.find({color: colorName, grade: grade ? grade : 700 })};
  `;

  const buildColorTransition = () => `
    transition: background-color 2s ease !important;
  `;

  if(isSorted){
    styles += buildStyle('success');
    styles += buildColorTransition();
  } else if(isPivot) {
    styles += buildStyle('info', 400);
  } else if (isSelected) {
    styles += buildStyle('secondary', 400);
  } else {
    styles += buildStyle('primary', 100);
  }
  return styles;
}

export const Bar = styled.li<IBarProps>`
  box-sizing: border-box;
  margin-right: 1px;
  border-radius: 0px 0px 3px 3px;
  height: ${({ value }) => value * 5 }px;
  width: ${({ width }) => width ? width : '35'}px;
  ${({ theme, isSelected, isPivot, isSorted }) => defineColors({
    theme,
    isSelected,
    isPivot,
    isSorted
  })};
  
  ${({ theme, value, showNumbers }: any) => showNumbers && `
    &:after {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: ${value * 5}px;
      content: "${value}";
      color: ${theme.palette.find({ color: 'black' })};
      transform: scaleY(-1);
      font-size: 4.7px;
    };
  `}
`
