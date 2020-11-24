import React, { InputHTMLAttributes, useContext, useState } from 'react'
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

const InputContainer = styled.div<{ background: string; text: string; border: string }>`
  background-color: ${({ background }) => background};
  color: ${({ text }) => text};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${({ text }) => text};
  ${borderRadiusMixin}
  ${opacityMixin(0.4)}

  :hover {
    border: 1px solid ${({ border }) => border};
    ${opacityMixin(1)}
  }

  :focus-within {
    border: 1px solid ${({ border }) => border};
    ${opacityMixin(1)}
  }
`

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

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  icon?: string
}

const Input = ({ icon, ...props }: Props) => {
  const theme = useContext(ThemeContext)
  const [value, setValue] = useState('')

  return (
    <InputContainer background={theme.background} text={theme.text} border={theme.primary}>
      {icon && <i className={`fas fa-${icon}`} />}
      <StyledInput value={value} onChange={(e) => setValue(e.target.value)} {...props} />
      {value && <ClearIcon className="fas fa-times" hoverColor={theme.primary} onClick={() => setValue('')} />}
    </InputContainer>
  )
}

export default Input
