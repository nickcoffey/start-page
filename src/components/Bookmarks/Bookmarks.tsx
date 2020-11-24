import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App'
import { Card } from '../general'

const CardLink = styled.a`
  text-decoration: none;
`

const StyledCard = styled(Card)<{ hoverColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    h3 {
      color: ${({ hoverColor }) => hoverColor};
    }
    i {
      color: ${({ hoverColor }) => hoverColor};
    }
  }
  :active {
    transform: translateY(1px);
  }
`

const Icon = styled.i<{ color: string }>`
  font-size: 60px;
  color: ${({ color }) => color};
  margin: 24px 0px;
`

const Subtitle = styled.h3<{ color: string }>`
  color: ${({ color }) => color};
`

export type BookmarkType = {
  icon: string
  subtitle: string
  link: string
}

const BookmarkCard = ({ icon, subtitle, link }: BookmarkType) => {
  const theme = useContext(ThemeContext)

  return (
    <CardLink href={link}>
      <StyledCard hoverColor={theme.primary}>
        <Icon color={theme.text} className={`fab fa-${icon}`} />
        <Subtitle color={theme.text}>{subtitle}</Subtitle>
      </StyledCard>
    </CardLink>
  )
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: center;
  gap: 24px;
`

type Props = {
  loading: boolean
  error?: string
  bookmarks?: BookmarkType[]
}

const Bookmarks = ({ loading, error, bookmarks }: Props) => {
  // const linkTemplate = (link: string, suffix = 'com', prefix = 'www') => `https://${prefix}.${link}.${suffix}`

  // const bookmarks: BookmarkType[] = [
  //   { icon: 'reddit', subtitle: 'Reddit', link: linkTemplate('reddit') },
  //   { icon: 'github', subtitle: 'GitHub', link: linkTemplate('github') },
  //   { icon: 'youtube', subtitle: 'YouTube', link: linkTemplate('youtube') },
  //   { icon: 'dev', subtitle: 'Dev.to', link: linkTemplate('dev', 'to') },
  //   { icon: 'amazon', subtitle: 'Amazon', link: linkTemplate('amazon') },
  //   { icon: 'apple', subtitle: 'Apple', link: linkTemplate('apple') },
  //   { icon: 'searchengin', subtitle: 'DuckDuckGo', link: linkTemplate('duckduckgo') },
  //   { icon: 'google-drive', subtitle: 'Drive', link: linkTemplate('google', undefined, 'drive') }
  // ]

  const sortedBookmarks = bookmarks?.sort((a, b) => (a.subtitle.toLowerCase() > b.subtitle.toLowerCase() ? 1 : -1))

  return (
    <>
      {error ? (
        <>
          <h1>Error</h1>
          <p>{error}</p>
        </>
      ) : loading ? (
        <h1>Loading...</h1>
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
