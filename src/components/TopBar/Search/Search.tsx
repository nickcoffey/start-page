import React from 'react'
import styled from 'styled-components'
import { Input } from '../../general'
import Actions from './Actions'

const SearchBar = styled.div`
  display: flex;
  flex: 1;
  margin-left: 24px;
`

const Search = () => {
  return (
    <SearchBar>
      <Input placeholder="Find bookmarks or search..." />
      <Actions />
    </SearchBar>
  )
}

export default Search
