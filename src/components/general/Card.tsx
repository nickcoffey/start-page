import React, { HTMLAttributes, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App'
import { borderRadiusMixin } from './Mixins'

const StyledCard = styled.div<{ border: string; hoverColor: string; width: number; height: number }>`
  ${borderRadiusMixin}
  border: 1px solid ${({ border }) => border};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  cursor: pointer;

  > * {
    color: ${({ border }) => border};
  }

  :hover {
    border: 1px solid ${({ hoverColor }) => hoverColor};
    color: ${({ hoverColor }) => hoverColor};
    > * {
      color: ${({ hoverColor }) => hoverColor};
    }
  }
  :active {
    transform: translateY(1px);
  }
`

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  width?: number
  height?: number
  hoverColor?: 'primary' | 'secondary'
}

const Card = ({ children, width = 150, height = 150, hoverColor = 'primary', ...props }: Props) => {
  const theme = useContext(ThemeContext)

  return (
    <StyledCard border={theme.text} hoverColor={theme[hoverColor]} width={width} height={height} {...props}>
      {children}
    </StyledCard>
  )
}

export default Card
