import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { boxShadowMixin } from './Mixins'

const Input = ({ children, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const StyledInput = styled.input`
    margin-right: 24px;
    flex: 4;
    height: 30px;
    border-radius: 4px;
    border: 0px;
    padding-left: 12px;
    background-color: #d3d3d3;
    color: black;
    ${boxShadowMixin}

    &:hover {
      &::placeholder {
        opacity: 1;
      }
    }

    &:focus {
      &::placeholder {
        opacity: 1;
      }
    }
  `

  return <StyledInput {...props}>{children}</StyledInput>
}

export default Input
