import { useNavigate } from 'react-router-dom'

import { routesPathsEnum } from '../../../app/routes/enums'
import { ButtonStyled, TableHeadCellStyled } from '../../../widgets/PostsList/ui/PostsList.styled'
import { PostType } from '../api/postApiTypes'
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
        <TextMoreStyled width={800}>{post.body}</TextMoreStyled>
      </TableHeadCellStyled>
      <TableHeadCellStyled width={100}>
        <ButtonStyled onClick={clickHandler}>more details 👀️</ButtonStyled>
      </TableHeadCellStyled>
    </TableRowBodyStyled>
  )
}
