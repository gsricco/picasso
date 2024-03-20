import { useNavigate, useParams } from 'react-router-dom'

import { routesPathsEnum } from '../../../app/routes/enums'
import { useGetPostQuery } from '../../../entities/Post/api/getAllPostsAPI'
import { ButtonStyled } from '../../../widgets/PostsList/ui/PostsList.styled'
import { TextItemPost, WrapperPostPage } from './PostPage.styled'

const PostPage = () => {
  const { id: post } = useParams()

  const { data, error, isLoading } = useGetPostQuery(post)
  const navigate = useNavigate()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error server</div>
  }
  const clickHandler = () => {
    navigate(routesPathsEnum.MAIN)
  }

  return data ? (
    <WrapperPostPage>
      <TextItemPost>
        Post №: <span>{data?.id}</span>
      </TextItemPost>
      <TextItemPost>
        USER ID: <span>{data?.userId}</span>
      </TextItemPost>
      <TextItemPost>
        Title: <span>{data?.title}</span>
      </TextItemPost>
      <TextItemPost>
        Description: <span>{data?.body}</span>
      </TextItemPost>
      <ButtonStyled onClick={clickHandler}>🚶 Go to back 😏</ButtonStyled>
    </WrapperPostPage>
  ) : (
    <WrapperPostPage>No Post</WrapperPostPage>
  )
}

export default PostPage
