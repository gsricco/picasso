import styled from 'styled-components'

import { themeProject } from '../../../styles/Them.styled'

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: 100%;
  height: 60px;
  position: fixed;
  background: ${themeProject.colors.header.background};

  & img {
    width: 120px;
  }
`
export const TitleLog = styled.h2``
