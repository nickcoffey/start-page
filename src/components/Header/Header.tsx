import React from 'react'
import styled from 'styled-components'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../general'

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

type Props = {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ isDark, setIsDark }: Props) => {
  return (
    <Container>
      <Button onClick={() => setIsDark(!isDark)} icon={isDark ? faSun : faMoon} />
    </Container>
  )
}

export default Header
