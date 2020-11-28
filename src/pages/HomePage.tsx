import React from 'react'
import { Bookmarks, TopBar } from '../components'
import { BookmarkType } from '../components/Bookmarks'
import { useQuery } from '../hooks'

const HomePage = () => {
  const { data, loading, error, refetch } = useQuery<BookmarkType>('bookmarks')

  return (
    <>
      <TopBar loading={loading} error={error} />
      <Bookmarks loading={loading} error={error} bookmarks={data} refetch={refetch} />
    </>
  )
}

export default HomePage
