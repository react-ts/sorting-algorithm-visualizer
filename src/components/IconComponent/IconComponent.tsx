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

export const IconComponent = ({ icon, ...rest } : IconProps) => (
  <StyledSpan className="material-symbols-outlined" { ...rest }>
    { icon }
  </StyledSpan>
)
