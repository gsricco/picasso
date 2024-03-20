import { Route, Routes } from 'react-router-dom'

import ErrorPage from '../../pages/ErrorPage/ui/ErrorPage'
import MainPage from '../../pages/MainPage/ui/MainPage'
import PostPage from '../../pages/PostPage/ui/PostPage'
import { routesPathsEnum } from './enums'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path={routesPathsEnum.MAIN} />
      <Route element={<PostPage />} path={`${routesPathsEnum.POST}:id`} />
      <Route element={<ErrorPage />} path={'*'} />
    </Routes>
  )
}

export default AppRoutes
