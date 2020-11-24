import React from 'react'
import styled from 'styled-components'
import { Button, Input } from '../general'

const SearchBar = styled.div`
  display: flex;
  flex: 1;
  margin-left: 24px;
`

const Search = () => {
  return (
    <SearchBar>
      <Input icon="search" placeholder="Find bookmarks or search..." />
      <Button icon="plus" style={{ margin: '0px 24px' }}>
        Add
      </Button>
      <Button icon="edit">Edit</Button>
    </SearchBar>
  )
}

export default Search
