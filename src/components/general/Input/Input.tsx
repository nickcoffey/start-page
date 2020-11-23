import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { borderRadiusMixin, boxShadowMixin } from '../Mixins'

const Input = ({ children, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const StyledInput = styled.input`
    border: 0px;
    padding-left: 12px;
    background-color: #d3d3d3;
    color: black;
    ${boxShadowMixin}
    ${borderRadiusMixin}

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

  return (
    <div>
      {/* <i className={`fas fa-${icon}`} style={{ paddingRight: children ? 4 : undefined }}></i> */}
      <i className={`fas fa-search`} style={{ paddingRight: 4 }}></i>
      {children}
      <StyledInput {...props} />
    </div>
  )
}

export default Input
