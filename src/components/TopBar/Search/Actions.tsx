import React from 'react'
import styled from 'styled-components'
import { Button } from '../../general'

const Group = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`

const Actions = () => {
  return (
    <Group>
      <Button icon="times" />
      <Button icon="plus">Add</Button>
      <Button icon="edit">Edit</Button>
    </Group>
  )
}

export default Actions
