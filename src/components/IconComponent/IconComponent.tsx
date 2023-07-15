import { StyledSpan } from "./IconComponent.styles.";

interface Props {
  icon: string,
  color?: string,
  fontSize?: number,
  fill?: number,
  weight?: number,
  grade?: number,
  opticalSize?: number
}

export default function IconComponent({ icon,  color , fontSize, fill, weight, grade, opticalSize }: Props) {
  return (
    <StyledSpan className="material-symbols-outlined" {...{color, fontSize, fill, weight, grade, opticalSize}}>
      {icon}
    </StyledSpan>
  );
}
