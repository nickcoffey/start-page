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
    h1 {
      color: ${({ hoverColor }) => hoverColor};
    }
  }
  :active {
    transform: translateY(1px);
  }
`

const BigLetters = styled.h1<{ color: string }>`
  font-size: 300%;
  font-weight: 900;
  color: ${({ color }) => color};
`

const Subtitle = styled.p<{ color: string }>`
  color: ${({ color }) => color};
`

type BookmarkCardProps = {
  letters: string
  subtitle: string
  link: string
}

const BookmarkCard = ({ letters, subtitle, link }: BookmarkCardProps) => {
  const theme = useContext(ThemeContext)

  return (
    <CardLink target="_blank" href={link}>
      <StyledCard hoverColor={theme.text}>
        <BigLetters color={theme.secondary}>{letters}</BigLetters>
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

const Bookmarks = () => {
  const linkTemplate = (link: string, suffix = 'com', prefix = 'www') => `https://${prefix}.${link}.${suffix}`

  const bookmarks: BookmarkCardProps[] = [
    { letters: 'R', subtitle: 'Reddit', link: linkTemplate('reddit') },
    { letters: 'GH', subtitle: 'GitHub', link: linkTemplate('github') },
    { letters: 'YT', subtitle: 'YouTube', link: linkTemplate('youtube') },
    { letters: 'DEV', subtitle: 'Dev.to', link: linkTemplate('dev', 'to') },
    { letters: 'AZ', subtitle: 'Amazon', link: linkTemplate('amazon') },
    { letters: 'APPL', subtitle: 'Apple', link: linkTemplate('apple') },
    { letters: 'DDG', subtitle: 'DuckDuckGo', link: linkTemplate('duckduckgo') },
    { letters: 'D', subtitle: 'Drive', link: linkTemplate('google', undefined, 'drive') }
  ]

  return (
    <CardContainer>
      {bookmarks.map((bookmark, index) => (
        <BookmarkCard key={index} {...bookmark} />
      ))}
    </CardContainer>
  )
}

export default Bookmarks
