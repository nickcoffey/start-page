import React, { useContext } from 'react'
import styled from 'styled-components'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../App'
import { borderRadiusMixin, Button, columnCenteredMixin, Spinner } from '../general'
import BookmarkCard from './BookmarkCard'

export type BookmarkType = {
  id: string
  letters: string
  link: string
  name: string
}

const LoadingContainer = styled.div`
  ${columnCenteredMixin}
`

const ErrorContainer = styled.div<{ border: string }>`
  ${columnCenteredMixin};
  ${borderRadiusMixin};
  border: 1px solid ${({ border }) => border};
  padding: 24px 0px;
  button {
    margin: 0px;
  }
  h3 {
    margin-bottom: 0px 0px 24px;
  }
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: center;
  gap: 24px;
`

type Props = {
  loading: boolean
  error: boolean
  refetch: () => void
  bookmarks?: BookmarkType[]
  editMode: boolean
}

const Bookmarks = ({ loading, error, refetch, bookmarks, editMode }: Props) => {
  const theme = useContext(ThemeContext)
  const sortedBookmarks = bookmarks?.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

  return (
    <>
      {error ? (
        <ErrorContainer border={theme.secondary}>
          <h3>There was an error loading your bookmarks please try again</h3>
          <Button icon={faRedo} onClick={() => refetch()}>
            Try Again
          </Button>
        </ErrorContainer>
      ) : loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <CardContainer>
          {sortedBookmarks?.map((bookmark, index) => (
            <BookmarkCard key={index} editMode={editMode} {...bookmark} />
          ))}
        </CardContainer>
      )}
    </>
  )
}

export default Bookmarks
