import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App'

const ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`

const Clock = () => {
  const theme = useContext(ThemeContext)

  const getCurrentTime = () => {
    const date = new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    return { hours: date.slice(0, 2), minutes: date.slice(3, 5), amfm: date.slice(6, 8) }
  }

  const [time, setTime] = useState(getCurrentTime())

  useEffect(() => {
    setTimeout(() => {
      setTime(getCurrentTime())
    }, 1000)
  })

  return (
    <h1>
      {time.hours}
      <ColoredText color={theme.primary}>:</ColoredText>
      {time.minutes} {time.amfm}
    </h1>
  )
}

export default Clock
