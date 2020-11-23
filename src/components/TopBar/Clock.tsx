import React, { useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  setTimeout(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)

  return <h1>{time}</h1>
}

export default Clock
