import React from 'react'
import styled from 'styled-components'
import { Header } from './components'

const Content = styled.div`
  margin: 50px 300px 0px 300px;
`

const App = () => {
  return (
    <Content>
      <Header />
    </Content>
  )
}

export default App
