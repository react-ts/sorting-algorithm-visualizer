import styled from '@emotion/styled'

export const StyledSpan = styled.span<{
  color?: string,
  fontSize?: number,
  fill?: number,
  weight?: number,
  grade?: number,
  opticalSize?: number
}>`
  ${({ color }) => `color: ${color}`};
  ${({ fontSize }) => `font-size: ${fontSize}px !important`};
  ${({ fill, weight, grade, opticalSize }) => `
  font-variation-settings: 'FILL' ${fill || 0},
  'wght' ${weight || 700},
  'GRAD' ${grade || 200},
  'opsz' ${opticalSize || 48}
  `};
    
`
