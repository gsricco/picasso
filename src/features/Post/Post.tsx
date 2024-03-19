import { useNavigate } from 'react-router-dom'

import { PostType } from '../../api/PostsAPI/postApiTypes'
import { routesPathsEnum } from '../../routes/enums'
import { ButtonStyled, TableHeadCellStyled } from '../PostsList/PostsList.styled'
import { TableRowBodyStyled, TextMoreStyled } from './Post.styled'

type PropsType = { post: PostType }

export const Post = ({ post }: PropsType) => {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(routesPathsEnum.POST + `${post.id}`)
  }

  return (
    <TableRowBodyStyled>
      <TableHeadCellStyled width={80}>{post.id}</TableHeadCellStyled>
      <TableHeadCellStyled width={100}>{post.userId}</TableHeadCellStyled>
      <TableHeadCellStyled width={300}>{post.title}</TableHeadCellStyled>
      <TableHeadCellStyled width={800}>
        <TextMoreStyled width={500}>{post.body}</TextMoreStyled>
      </TableHeadCellStyled>
      <TableHeadCellStyled width={100}>
        <ButtonStyled onClick={clickHandler}>more details 👀️</ButtonStyled>
      </TableHeadCellStyled>
    </TableRowBodyStyled>
  )
}
