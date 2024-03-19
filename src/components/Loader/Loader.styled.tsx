import { keyframes, styled } from 'styled-components'

import { themeProject } from '../../styles/Them.styled'

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${themeProject.colors.colorMain};
  z-index: 103;

  span {
    display: inline-block;
    position: relative;
    height: 50px;
    width: 50px;

    &:before,
    &:after {
      content: '';
      border-radius: 50%;
      position: absolute;
      inset: 0;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
    }

    &:after {
      box-shadow: 0 2px 0 #ff3d00 inset;
      animation: ${rotate} 1s linear infinite;
    }
  }
`
