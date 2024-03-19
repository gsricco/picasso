import { PostType } from '../../api/PostsAPI/postApiTypes'
import { Post } from '../Post/Post'
import {
  TableBodyStyled,
  TableHeadCellStyled,
  TableHeadStyled,
  TableRowStyled,
  TableStyled,
} from './PostsList.styled'

type PropsType = {
  data: PostType[]
}

export const PostsList = ({ data }: PropsType) => {
  return (
    <TableStyled>
      <TableHeadStyled>
        <TableRowStyled>
          <TableHeadCellStyled width={80}>№</TableHeadCellStyled>
          <TableHeadCellStyled width={100}>UserID</TableHeadCellStyled>
          <TableHeadCellStyled width={300}>Title</TableHeadCellStyled>
          <TableHeadCellStyled width={800}>Description</TableHeadCellStyled>
          <TableHeadCellStyled width={100}>Actions</TableHeadCellStyled>
        </TableRowStyled>
      </TableHeadStyled>
      <TableBodyStyled>{data?.map(post => <Post key={post.id} post={post} />)}</TableBodyStyled>
    </TableStyled>
  )
}
