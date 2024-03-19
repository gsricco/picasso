import { Loader } from '../../components/Loader'
import { PostsList } from '../../features/PostsList/PostsList'
import { useGetPosts } from '../../hooks/useGetPosts'
import { WrapperPage } from './MainPage.styled'

const MainPage = () => {
  const { data, error, isLoading } = useGetPosts()

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <div>Error Server</div>
  }

  return <WrapperPage>{data ? <PostsList data={data} /> : <>No Posts</>}</WrapperPage>
}

export default MainPage
