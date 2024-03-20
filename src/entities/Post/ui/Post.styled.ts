import styled from 'styled-components'

export const TableRowBodyStyled = styled.tr`
  height: 150px;
`

export const TextMoreStyled = styled.div<{ width: number }>`
  width: ${props => `${props.width}px`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
