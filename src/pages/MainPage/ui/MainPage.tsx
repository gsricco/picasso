import { useGetPosts } from '../../../entities/Post/hooks/useGetPosts'
import { Loader } from '../../../shared/Loader'
import { PostsList } from '../../../widgets/PostsList/ui/PostsList'
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
