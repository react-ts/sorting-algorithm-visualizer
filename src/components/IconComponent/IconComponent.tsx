import { StyledSpan } from "./IconComponent.styles.";

interface IconProps {
  icon: string,
  color?: string,
  fontSize?: number,
  fill?: number,
  weight?: number,
  grade?: number,
  opticalSize?: number
}

export const IconComponent = ({ icon,  color , fontSize, fill, weight, grade, opticalSize }: IconProps) => (
  <StyledSpan className="material-symbols-outlined" {...{ color, fontSize, fill, weight, grade, opticalSize }}>
    {icon}
  </StyledSpan>
)
