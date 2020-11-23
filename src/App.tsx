import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { Header, TopBar } from './components'

const theme = {
  light: {
    background: '#ffffff',
    primary: '#2a9d8f',
    secondary: '#e9c46a',
    text: '#000000'
  },
  dark: {
    background: '#264653',
    primary: '#2a9d8f',
    secondary: '#e9c46a',
    text: '#ffffff'
  }
}

export const ThemeContext = createContext(theme.light)

const Content = styled.div`
  margin: 50px 300px 0px 300px;
`

const App = () => {
  const [isDark, setIsDark] = useState(true)
  const localTheme = isDark ? theme.dark : theme.light

  document.body.style.backgroundColor = localTheme.background
  document.body.style.color = localTheme.text

  return (
    <ThemeContext.Provider value={localTheme}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Content>
        <TopBar />
      </Content>
    </ThemeContext.Provider>
  )
}

export default App
