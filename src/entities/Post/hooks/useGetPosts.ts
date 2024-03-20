import { useCallback, useEffect, useState } from 'react'

import { useGetAllPostsQuery, useGetPostsQuery } from '../api/getAllPostsAPI'

export const useGetPosts = () => {
  const lastPage = Number(sessionStorage.getItem('lastPage'))

  const [page, setPage] = useState(lastPage)
  const [scrollY, setScrollY] = useState(0)
  const { data, error, isLoading } = useGetPostsQuery(page)
  const { data: allPosts } = useGetAllPostsQuery({})
  const totalPosts = allPosts?.length || 10

  const fetchMoreData = useCallback(() => {
    const currentScrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const bottom = documentHeight - (currentScrollY + windowHeight)

    setScrollY(currentScrollY)

    if (bottom < 1) {
      setPage(prev => (prev < totalPosts - 10 ? prev + 10 : totalPosts - 10))
      window.scrollTo({
        behavior: 'auto',
        top: 50,
      })
    }
    if (currentScrollY < 1) {
      setPage(prev => (prev !== 0 ? prev - 10 : 0))
      window.scrollTo({
        behavior: 'auto',
        top: 50,
      })
    }
  }, [setPage, totalPosts])

  sessionStorage.setItem('lastPage', page.toString())
  useEffect(() => {
    window.addEventListener('scroll', fetchMoreData)

    return () => window.removeEventListener('scroll', fetchMoreData)
  }, [scrollY, fetchMoreData])

  return { data, error, fetchMoreData, isLoading }
}
