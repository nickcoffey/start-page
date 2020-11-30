import React, { useState } from 'react'

const Clock = () => {
  const getCurrentTime = () => new Date().toLocaleTimeString()

  const [time, setTime] = useState(getCurrentTime())

  setTimeout(() => {
    console.log('Hello')
    setTime(getCurrentTime())
  }, 1000)

  return <h1>{time}</h1>
}

export default Clock
