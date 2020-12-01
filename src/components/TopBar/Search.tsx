import React, { useState } from 'react'
import styled from 'styled-components'
import { faEdit, faPlus, faSearch, faStop } from '@fortawesome/free-solid-svg-icons'
import { Button, Input, Modal } from '../general'
import BookmarkForm from './BookmarkForm'
import { EditProps } from '../../pages/HomePage'

const SearchBar = styled.form`
  display: flex;
  flex: 1;
  margin-left: 24px;
`

export const ModalContent = styled.div`
  width: 400px;
  padding: 24px;
  h1 {
    margin-top: 0px;
  }
`

type Props = {
  loading: boolean
  error: boolean
} & EditProps

const Search = ({ loading, error, editMode, setEditMode }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <SearchBar method="get" id="search" action="https://duckduckgo.com/">
        <Input icon={faSearch} placeholder="Search DuckDuckGo..." name="q" autoFocus />
        <Button icon={faSearch} type="submit" style={{ marginRight: 12, marginLeft: 12 }}>
          Search
        </Button>
        <Button icon={faPlus} type="button" onClick={() => setModalOpen(true)} disabled={loading || error}>
          Add
        </Button>
        <Button
          icon={editMode ? faStop : faEdit}
          type="button"
          onClick={() => setEditMode(!editMode)}
          style={{ marginLeft: 12, width: 75 }}
          disabled={loading || error}
        >
          {editMode ? 'Stop' : 'Edit'}
        </Button>
      </SearchBar>
      {modalOpen && (
        <Modal close={closeModal}>
          <ModalContent>
            <h1>Add Bookmark</h1>
            <BookmarkForm closeModal={closeModal} operation="create" />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default Search
