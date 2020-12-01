import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../App'
import { borderRadiusMixin, Button, Card, Spinner } from '../general'

const CardLink = styled.a`
  text-decoration: none;
`

const centeredMixin = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledCard = styled(Card)`
  ${centeredMixin}
`

const Letters = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
`

export type BookmarkType = {
  letters: string
  link: string
  name: string
}

const BookmarkCard = ({ letters, link, name }: BookmarkType) => (
  <CardLink href={link}>
    <StyledCard hoverColor="primary">
      <Letters>{letters.toUpperCase()}</Letters>
      <h3>{name}</h3>
    </StyledCard>
  </CardLink>
)

const LoadingContainer = styled.div`
  ${centeredMixin}
`

const ErrorContainer = styled.div<{ border: string }>`
  ${centeredMixin};
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
}

const Bookmarks = ({ loading, error, refetch, bookmarks }: Props) => {
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
            <BookmarkCard key={index} {...bookmark} />
          ))}
        </CardContainer>
      )}
    </>
  )
}

export default Bookmarks
