import React, { useState } from 'react'
import { Bookmarks, TopBar } from '../components'
import { BookmarkType } from '../components/Bookmarks'
import { firestore } from '../services'

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>()

  firestore
    .collection('bookmarks')
    .get()
    .then((snapshot) => {
      const tempBookmarks: BookmarkType[] = []
      snapshot.forEach((doc) =>
        tempBookmarks.push({ icon: doc.data().icon, subtitle: doc.data().subtitle, link: doc.data().link })
      )
      setBookmarks(tempBookmarks)
      setLoading(false)
    })
    .catch((error: string) => setError(error))

  return (
    <>
      <TopBar />
      <Bookmarks loading={loading} error={error} bookmarks={bookmarks} />
    </>
  )
}

export default HomePage
