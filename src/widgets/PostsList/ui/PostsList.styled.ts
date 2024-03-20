import styled from 'styled-components'

import { themeProject } from '../../../styles/Them.styled'

export const TableStyled = styled.table`
  width: 90%;
`
export const TableHeadStyled = styled.thead``

export const TableRowStyled = styled.tr`
  height: 70px;
  width: 90%;
  background: ${themeProject.colors.table.header};
  border-radius: 5px;
  box-shadow: 2px 2px 2px ${themeProject.colors.backgroundPage.secondary};
`

export const TableHeadCellStyled = styled.th<{ width: number }>`
  padding: 6px 24px;
  font-size: 14px;
  font-weight: 600;
  width: ${props => `${props.width}px`};
`
export const TableBodyStyled = styled.tbody`
  text-align: center;
  background: ${themeProject.colors.table.body};
  border-radius: 5px;
  box-shadow: 2px 2px 2px ${themeProject.colors.backgroundPage.secondary};
`
export const ButtonStyled = styled.button`
  height: 30px;
  width: 200px;
  text-transform: uppercase;
  background: ${themeProject.colors.table.header};
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: ${themeProject.colors.table.body};
  }
`
