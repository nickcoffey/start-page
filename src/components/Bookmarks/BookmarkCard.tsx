import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import clsx from 'clsx'
import { faEdit, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from '../../App'
import { Button, Card, columnCenteredMixin, Modal } from '../general'
import { BookmarkType } from '.'
import { ModalContent } from '..'
import BookmarkForm from '../TopBar/BookmarkForm'
import { useMutation } from '../../hooks'

const CardLink = styled.a`
  text-decoration: none;
  &.editMode {
    cursor: default;
  }
`

const StyledCard = styled(Card)`
  ${columnCenteredMixin}
  &.editMode {
    cursor: default;
  }
`

const IconHeader = styled.div<{ hoverColor: string }>`
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 10px;
  > .edit {
    cursor: pointer;
  }
  > .delete {
    cursor: pointer;
  }
  > .edit:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
  > .delete:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
  &.editMode {
    display: flex;
  }
`

const Letters = styled.h1`
  font-size: 50px;
  margin-top: 5px;
`

const Name = styled.h3`
  margin: 0px;
`

const ButtonGroup = styled.div`
  display: flex;
`

type Props = {
  editMode: boolean
} & BookmarkType

const BookmarkCard = ({ id, letters, link, name, editMode }: Props) => {
  const theme = useContext(ThemeContext)
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const closeEdit = () => setEditOpen(false)
  const closeDelete = () => setDeleteOpen(false)

  const { error, loading, runMutation } = useMutation<BookmarkType>('bookmarks', 'delete')
  useEffect(() => {
    if (!error && !loading) {
      closeDelete()
    }
  }, [error, loading])

  return (
    <>
      <CardLink href={editMode ? undefined : link} className={clsx({ editMode })}>
        <StyledCard
          className={clsx({ editMode })}
          hoverColor={editMode ? 'text' : 'primary'}
          borderColor={editMode ? 'secondary' : 'text'}
        >
          <IconHeader hoverColor={theme.secondary} className={clsx({ editMode })}>
            <FontAwesomeIcon icon={faEdit} onClick={() => setEditOpen(true)} className="edit" />
            <FontAwesomeIcon icon={faTrash} onClick={() => setDeleteOpen(true)} className="delete" />
          </IconHeader>
          <Letters>{letters.toUpperCase()}</Letters>
          <Name>{name}</Name>
        </StyledCard>
      </CardLink>
      {editOpen && (
        <Modal close={closeEdit}>
          <ModalContent>
            <h1>Edit {name}</h1>
            <BookmarkForm closeModal={closeEdit} operation="update" bookmark={{ id, letters, link, name }} />
          </ModalContent>
        </Modal>
      )}
      {deleteOpen && (
        <Modal close={closeDelete} borderColor="secondary">
          <ModalContent>
            <h1>Delete {name}?</h1>
            <p>Are you sure you want to delete your bookmark for {name}?</p>
            <ButtonGroup>
              <Button icon={faTrash} color="secondary" style={{ marginRight: 12 }} onClick={() => runMutation({ id })}>
                Yes
              </Button>
              <Button icon={faTimes} color="primary" onClick={() => setDeleteOpen(false)}>
                No
              </Button>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default BookmarkCard
