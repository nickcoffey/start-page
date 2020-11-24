import React, { HTMLAttributes, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App'
import { borderRadiusMixin } from './Mixins'

const StyledCard = styled.div<{ border: string; hoverBorder: string; width: number; height: number }>`
  ${borderRadiusMixin}
  border: 1px solid ${({ border }) => border};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  cursor: pointer;

  :hover {
    border: 1px solid ${({ hoverBorder }) => hoverBorder};
  }
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
}

const Card = ({ children, width = 150, height = 150, ...props }: Props) => {
  const theme = useContext(ThemeContext)

  return (
    <StyledCard border={theme.primary} hoverBorder={theme.text} width={width} height={height} {...props}>
      {children}
    </StyledCard>
  )
}

export default Card
