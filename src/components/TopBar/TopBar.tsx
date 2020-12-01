import React from 'react'
import styled from 'styled-components'
import { EditProps } from '../../pages/HomePage'
import Clock from './Clock'
import Search from './Search'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type Props = {
  loading: boolean
  error: boolean
} & EditProps

const TopBar = ({ loading, error, editMode, setEditMode }: Props) => {
  return (
    <Container>
      <Clock />
      <Search loading={loading} error={error} editMode={editMode} setEditMode={setEditMode} />
    </Container>
  )
}

export default TopBar
