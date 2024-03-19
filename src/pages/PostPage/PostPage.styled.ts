import styled from 'styled-components'

import { themeProject } from '../../styles/Them.styled'

export const WrapperPostPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 80px 40px;
`

export const TextItemPost = styled.div`
  width: 50%;
  padding: 20px;
  border: 2px solid ${themeProject.colors.table.header};
  background: ${themeProject.colors.table.body};
  border-radius: 5px;
  box-shadow: 2px 2px 2px ${themeProject.colors.header.background};
  font-weight: 800;

  & span {
    font-weight: normal;
  }
`
