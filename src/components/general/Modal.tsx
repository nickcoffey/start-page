import React, { ReactNode, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App'
import { borderRadiusMixin } from './Mixins'

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Content = styled.div<{ text: string; background: string; border: string }>`
  position: relative;
  background-color: ${({ background }) => background};
  color: ${({ text }) => text};
  border: 1px solid ${({ border }) => border};
  ${borderRadiusMixin}
  cursor: default;
`

type Props = {
  close: () => void
  borderColor?: 'primary' | 'secondary'
  children: ReactNode
}

const Modal = ({ close, borderColor = 'primary', children }: Props) => {
  const theme = useContext(ThemeContext)

  return (
    <Background onClick={() => close()}>
      <Content
        text={theme.text}
        background={theme.background}
        border={theme[borderColor]}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Content>
    </Background>
  )
}

export default Modal
