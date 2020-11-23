import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../App'
import { Input, Button } from '../components/general'

const SectionLabel = styled.h2`
  text-decoration: underline;
`

const SectionSpacer = styled.div`
  margin-top: 100px;
`

const ColorContainer = styled.div`
  display: flex;
`

const ColorBox = styled.div<{ backgroundColor: string; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`

const ThemePage = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <h1>Theme</h1>
      <hr />

      <SectionLabel>Components</SectionLabel>
      <h3>Button</h3>
      <Button>Click Me</Button>
      <h3>Input</h3>
      <Input />

      <SectionSpacer />

      <SectionLabel>Typography</SectionLabel>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>Paragraph</p>

      <SectionSpacer />

      <SectionLabel>Colors</SectionLabel>
      <ColorContainer>
        <ColorBox color={theme.primaryText} backgroundColor={theme.primary}>
          Primary
        </ColorBox>
        <ColorBox color={theme.secondaryText} backgroundColor={theme.secondary}>
          Secondary
        </ColorBox>
      </ColorContainer>
    </>
  )
}

export default ThemePage
