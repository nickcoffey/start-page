import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import Search from './Search'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
`

const Header = () => {
  return (
    <Container>
      <Clock />
      <Search />
    </Container>
  )
}

export default Header
