import React, { ButtonHTMLAttributes, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App'
import { borderRadiusMixin, boxShadowMixin } from './Mixins'

const Button = ({ children, icon, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { icon?: string }) => {
  const theme = useContext(ThemeContext)

  const StyledButton = styled.button`
    background-color: ${theme.primary};
    border: 0px;
    padding: 8px 16px;
    color: #ffffff;
    cursor: pointer;
    ${borderRadiusMixin}
    ${boxShadowMixin}
  `

  return (
    <StyledButton {...props}>
      {icon && <i className={`fas fa-${icon}`} style={{ paddingRight: children ? 4 : undefined }}></i>}
      {children}
    </StyledButton>
  )
}

export default Button
