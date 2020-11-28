import React, { forwardRef, InputHTMLAttributes, useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { ThemeContext } from '../../App'
import { borderRadiusMixin } from './Mixins'

const opacityMixin = (opacity: number) => css`
  i {
    opacity: ${opacity};
  }
  input::placeholder {
    opacity: ${opacity};
  }
`

const Container = styled.div`
  width: 100%;
`

const InputContainer = styled.div<{ background: string; text: string; border: string; hoverBorder: string }>`
  background-color: ${({ background }) => background};
  color: ${({ text }) => text};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${({ border }) => border};
  ${borderRadiusMixin}
  ${opacityMixin(0.4)}

  :hover {
    border: 1px solid ${({ hoverBorder }) => hoverBorder};
    ${opacityMixin(1)}
  }

  :focus-within {
    border: 1px solid ${({ hoverBorder }) => hoverBorder};
    ${opacityMixin(1)}
  }
`
// TODO: fix extra border when tabbing in forms
const StyledInput = styled.input`
  border: 0px;
  margin-left: 12px;
  background-color: inherit;
  color: inherit;
  flex-grow: 1;
`

const ClearIcon = styled.i<{ hoverColor: string }>`
  cursor: pointer;
  :hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`

const ErrorText = styled.label<{ color: string }>`
  font-size: 80%;
  color: ${({ color }) => color};
`

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  icon?: string
  label?: string
  error?: string
}

// TODO: remove
// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, Props>(({ icon, label, error, style, ...props }: Props, ref) => {
  const theme = useContext(ThemeContext)
  const [value, setValue] = useState('')

  return (
    <Container style={style}>
      {label && <label>{label}</label>}
      <InputContainer
        background={theme.background}
        text={theme.text}
        border={error ? theme.secondary : theme.text}
        hoverBorder={error ? theme.text : theme.primary}
      >
        {icon && <i className={`fas fa-${icon}`} />}
        <StyledInput value={value} onChange={(e) => setValue(e.target.value)} {...props} ref={ref} />
        {value && <ClearIcon className="fas fa-times" hoverColor={theme.primary} onClick={() => setValue('')} />}
      </InputContainer>
      {error && <ErrorText color={theme.secondary}>{error}</ErrorText>}
    </Container>
  )
})

export default Input
