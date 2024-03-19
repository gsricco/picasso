import { Route, Routes } from 'react-router-dom'

import ErrorPage from '../pages/ErrorPage/ErrorPage'
import MainPage from '../pages/MainPage/MainPage'
import PostPage from '../pages/PostPage/PostPage'
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
