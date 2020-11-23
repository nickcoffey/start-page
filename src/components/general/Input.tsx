import React, { InputHTMLAttributes, useContext } from 'react'
import styled, { css } from 'styled-components'
import { ThemeContext } from '../../App'
import { borderRadiusMixin } from './Mixins'
interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  icon?: string
}

const Input = ({ icon, ...props }: Props) => {
  const theme = useContext(ThemeContext)

  const opacityMixin = (opacity: number) => css`
    i {
      opacity: ${opacity};
    }
    input::placeholder {
      opacity: ${opacity};
    }
  `

  const InputContainer = styled.div`
    background-color: ${theme.background};
    color: ${theme.text};
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border: 1px solid ${theme.text};
    ${borderRadiusMixin}
    ${opacityMixin(0.4)}

    i {
      padding-right: 4px;
    }

    :not(:placeholder-shown) {
      i {
        opacity: 1;
      }
    }

    :hover {
      border: 1px solid ${theme.primary};
      ${opacityMixin(1)}
    }

    :focus-within {
      border: 1px solid ${theme.primary};
      ${opacityMixin(1)}
    }
  `

  const StyledInput = styled.input`
    border: 0px;
    padding-left: 12px;
    background-color: inherit;
    color: inherit;
    flex-grow: 1;
  `

  return (
    <InputContainer>
      {icon && <i className={`fas fa-${icon}`}></i>}
      <StyledInput {...props} />
    </InputContainer>
  )
}

export default Input
