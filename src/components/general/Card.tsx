import React, { HTMLAttributes, useContext } from 'react'
import styled from 'styled-components'
import { ColorOptions, ThemeContext } from '../../App'
import { borderRadiusMixin } from './Mixins'

const StyledCard = styled.div<{ color: string; border: string; hoverColor: string; width: number; height: number }>`
  ${borderRadiusMixin}
  border: 1px solid ${({ border }) => border};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  cursor: pointer;

  > * {
    color: ${({ color }) => color};
  }

  :hover {
    border: 1px solid ${({ hoverColor }) => hoverColor};
  }
  :active {
    transform: translateY(1px);
  }
`

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  width?: number
  height?: number
  color?: ColorOptions
  hoverColor?: ColorOptions
  borderColor?: ColorOptions
}

const Card = ({
  children,
  width = 150,
  height = 150,
  color = 'text',
  hoverColor = 'primary',
  borderColor = 'text',
  ...props
}: Props) => {
  const theme = useContext(ThemeContext)

  return (
    <StyledCard
      color={theme[color]}
      border={theme[borderColor]}
      hoverColor={theme[hoverColor]}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </StyledCard>
  )
}

export default Card
