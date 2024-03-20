import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { PostType } from './postApiTypes'

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    getAllPosts: builder.query<PostType[], unknown>({
      query: () => ({ method: 'GET', url: `/posts` }),
    }),
    getPost: builder.query<PostType, unknown>({
      query: id => ({ method: 'GET', url: `/posts/${id}` }),
    }),
    getPosts: builder.query<PostType[], number>({
      query: count => ({ method: 'GET', url: `/posts/?_limit=10&_start=${count}` }),
    }),
  }),
  reducerPath: 'api',
})

export const { useGetAllPostsQuery, useGetPostQuery, useGetPostsQuery } = postsApi
