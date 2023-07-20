import { IconProps, StyledSpan } from "./Icon.styles";

export const Icon = ({ 
  icon,
  iconType = 'outlined',
  iconColor = { color: 'primary', grade: 900 },
  ...rest 
} : IconProps & { iconType?: 'rounded' | 'outlined'}) => (
  <StyledSpan
    className={`material-symbols-${iconType}`}
    iconColor={iconColor}
    { ...rest }
  >
    { icon }
  </StyledSpan>
);
