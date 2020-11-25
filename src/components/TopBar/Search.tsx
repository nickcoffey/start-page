import React from 'react'
import styled from 'styled-components'
import { Button, Input } from '../general'

const SearchBar = styled.form`
  display: flex;
  flex: 1;
  margin-left: 24px;
`

const Search = () => {
  return (
    <SearchBar method="get" id="search" action="https://duckduckgo.com/">
      <Input icon="search" placeholder="Search DuckDuckGo..." name="q" autoFocus />
      <Button icon="search" type="submit" style={{ marginRight: 24, marginLeft: 12 }}>
        Search
      </Button>
      <Button icon="plus">Add</Button>
    </SearchBar>
  )
}

export default Search
