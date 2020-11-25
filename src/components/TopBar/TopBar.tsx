import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import Search from './Search'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type Props = {
  loading: boolean
  error: boolean
}

const TopBar = ({ loading, error }: Props) => {
  return (
    <Container>
      <Clock />
      <Search loading={loading} error={error} />
    </Container>
  )
}

export default TopBar
