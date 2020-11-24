import React from 'react'
import { Bookmarks, TopBar } from '../components'
import { BookmarkType } from '../components/Bookmarks'
import { useQuery } from '../hooks'

const HomePage = () => {
  const { data, loading, error } = useQuery<BookmarkType>('bookmarks', 'read')

  return (
    <>
      <TopBar />
      <Bookmarks loading={loading} error={error} bookmarks={data} />
    </>
  )
}

export default HomePage
