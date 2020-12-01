import React, { useState } from 'react'
import { Bookmarks, TopBar } from '../components'
import { BookmarkType } from '../components/Bookmarks'
import { useSubscription } from '../hooks'

export type EditProps = {
  editMode: boolean
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const HomePage = () => {
  const { data, loading, error, refetch } = useSubscription<BookmarkType>('bookmarks')
  const [editMode, setEditMode] = useState(false)

  return (
    <>
      <TopBar loading={loading} error={error} editMode={editMode} setEditMode={setEditMode} />
      <Bookmarks loading={loading} error={error} bookmarks={data} refetch={refetch} editMode={editMode} />
    </>
  )
}

export default HomePage
