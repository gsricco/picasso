import { useNavigate } from 'react-router-dom'

import { ButtonStyled } from '../../features/PostsList/PostsList.styled'
import { routesPathsEnum } from '../../routes/enums'
import errorPage from '../../styles/images/404.svg'
import { WrapperErrorPage } from './ErrorPage.styled'

const ErrorPage = () => {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(routesPathsEnum.MAIN)
  }

  return (
    <WrapperErrorPage>
      <img alt={'Error'} src={errorPage} />
      <ButtonStyled onClick={clickHandler}>Go to 🏠Home</ButtonStyled>
    </WrapperErrorPage>
  )
}

export default ErrorPage
