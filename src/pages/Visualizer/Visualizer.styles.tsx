import styled from '@emotion/styled'

export const StyledDiv = styled.div<{
  greenColor: boolean
}>`
  ${({ greenColor }) => greenColor && `color: green`};
`
