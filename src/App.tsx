import React, { createContext, ReactNode, useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components'
import { HomePage, ThemePage } from './pages'

const theme = {
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: '#03a9f4',
    primaryText: '#ffffff',
    secondary: '#ff9800',
    secondaryText: '#000000'
  },
  dark: {
    background: '#000000',
    text: '#ffffff',
    primary: '#0288d1',
    primaryText: '#ffffff',
    secondary: '#ff9800',
    secondaryText: '#000000'
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

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Content>{children}</Content>
    </>
  )

  return (
    <ThemeContext.Provider value={localTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Wrapper>
              <HomePage />
            </Wrapper>
          </Route>
          <Route path="/components">
            <Wrapper>
              <ThemePage />
            </Wrapper>
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
