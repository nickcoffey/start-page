import React, { ButtonHTMLAttributes, useContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { ThemeContext } from '../../App'
import { borderRadiusMixin } from './Mixins'

const StyledButton = styled.button<{ background: string; hoverBackground: string; text: string; hoverText: string }>`
  background-color: ${({ background }) => background};
  border: 1px solid ${({ background }) => background};
  padding: 8px 16px;
  color: ${({ text }) => text};
  cursor: pointer;
  ${borderRadiusMixin}
  display: flex;
  align-items: center;
  justify-content: center;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :hover:enabled {
    background-color: ${({ hoverBackground }) => hoverBackground};
    color: ${({ hoverText }) => hoverText};
  }

  :active:enabled {
    transform: translateY(1px);
  }
`

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconDefinition
  color?: 'primary' | 'secondary'
}

const Button = ({ children, icon, color, ...props }: Props) => {
  const theme = useContext(ThemeContext)
  const text = color ? (color === 'primary' ? 'primaryText' : 'secondaryText') : 'primaryText'

  return (
    <StyledButton
      background={color ? theme[color] : theme.primary}
      hoverBackground={theme.background}
      text={theme[text]}
      hoverText={theme.text}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} style={{ paddingRight: children ? 4 : undefined }} />}
      {children}
    </StyledButton>
  )
}

export default Button
