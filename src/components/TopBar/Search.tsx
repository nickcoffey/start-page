import React, { useState } from 'react'
import styled from 'styled-components'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
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
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <SearchBar method="get" id="search" action="https://duckduckgo.com/">
        <Input icon={faSearch} placeholder="Search DuckDuckGo..." name="q" autoFocus />
        <Button icon={faSearch} type="submit" style={{ marginRight: 24, marginLeft: 12 }}>
          Search
        </Button>
        <Button icon={faPlus} type="button" onClick={() => setModalOpen(true)} disabled={loading || error}>
          Add
        </Button>
      </SearchBar>
      {modalOpen && (
        <Modal close={closeModal}>
          <ModalContent>
            <h1>Add Bookmark</h1>
            <BookmarkForm closeModal={closeModal} />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default Search
