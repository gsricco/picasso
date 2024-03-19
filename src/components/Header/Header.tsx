import { NavLink } from 'react-router-dom'

import { URL_PICASSO } from '../../constants'
import logo from '../../styles/images/259838.svg'
import { HeaderStyles, TitleLog } from './Header.styled'

const Header = () => {
  return (
    <HeaderStyles>
      <TitleLog>👨‍💻 Тестовое задание 📌</TitleLog>
      <NavLink to={URL_PICASSO}>
        <img alt={'picasso'} src={logo} />
      </NavLink>
    </HeaderStyles>
  )
}

export default Header
