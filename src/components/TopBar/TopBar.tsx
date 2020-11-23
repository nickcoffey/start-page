import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import Search from './Search'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TopBar = () => {
  return (
    <Container>
      <Clock />
      <Search />
    </Container>
  )
}

export default TopBar
