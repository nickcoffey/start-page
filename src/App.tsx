import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { Header, TopBar } from './components'

const theme = {
  light: {
    background: '#ffffff',
    primary: '#03a9f4',
    secondary: '#ff9800',
    text: '#000000'
  },
  dark: {
    background: '#000000',
    primary: '#0288d1',
    secondary: '#ff9800',
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
