import React from 'react'
import styled from 'styled-components'

const SearchBar = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 4px;
  border: 0px;
  padding-left: 12px;
  background-color: #d3d3d3;
  color: black;

  &::placeholder {
    color: black;
    opacity: 1;
  }
`

const Search = () => {
  return <SearchBar type="text" placeholder="Find bookmarks or search..." />
}

export default Search
