import { IconProps, StyledSpan } from "./Icon.styles";

export const Icon = ({ 
  icon,
  iconType = 'outlined',
  iconColor = { color: 'primary', grade: 900 },
  onClick,
  ...rest 
} : IconProps & { iconType?: 'rounded' | 'outlined' | 'filled'}) => (
  <StyledSpan
    onClick={onClick}
    className={`material-symbols-${iconType}`}
    iconColor={iconColor}
    { ...rest }
  >
    { icon }
  </StyledSpan>
);
