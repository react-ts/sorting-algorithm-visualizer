import styled from '@emotion/styled'

export const StyledDiv = styled.div<{
  greenColor: boolean
}>`
  ${({ greenColor, theme }: any) => greenColor && 
    `color: ${theme.palette.find({ color: 'primary', grade: 900 })}`
  };
`
