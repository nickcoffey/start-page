import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Modal } from '../general'
import BookmarkForm from './BookmarkForm'

const SearchBar = styled.form`
  display: flex;
  flex: 1;
  margin-left: 24px;
`

const ModalContent = styled.div`
  width: 400px;
  padding: 24px;
  h1 {
    margin-top: 0px;
  }
`

type Props = {
  loading: boolean
  error: boolean
}

const Search = ({ loading, error }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <SearchBar method="get" id="search" action="https://duckduckgo.com/">
        <Input icon="search" placeholder="Search DuckDuckGo..." name="q" autoFocus />
        <Button icon="search" type="submit" style={{ marginRight: 24, marginLeft: 12 }}>
          Search
        </Button>
        <Button icon="plus" type="button" onClick={() => setModalOpen(true)} disabled={loading || error}>
          Add
        </Button>
      </SearchBar>
      {modalOpen && (
        <Modal close={() => setModalOpen(false)}>
          <ModalContent>
            <h1>Add Bookmark</h1>
            <BookmarkForm />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default Search
