import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import clsx from 'clsx'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from '../../App'
import { Card, columnCenteredMixin, Modal } from '../general'
import { BookmarkType } from '.'
import { ModalContent } from '..'
import BookmarkForm from '../TopBar/BookmarkForm'

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

type Props = {
  editMode: boolean
} & BookmarkType

const BookmarkCard = ({ id, letters, link, name, editMode }: Props) => {
  const theme = useContext(ThemeContext)
  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = () => setModalOpen(false)

  const handleEdit = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation()
    setModalOpen(true)
  }

  return (
    <>
      <CardLink href={editMode ? undefined : link} className={clsx({ editMode })}>
        <StyledCard
          className={clsx({ editMode })}
          hoverColor={editMode ? 'text' : 'primary'}
          borderColor={editMode ? 'secondary' : 'text'}
        >
          <IconHeader hoverColor={theme.secondary} className={clsx({ editMode })}>
            <FontAwesomeIcon icon={faEdit} onClick={handleEdit} className="edit" />
            <FontAwesomeIcon icon={faTrash} className="delete" />
          </IconHeader>
          <Letters>{letters.toUpperCase()}</Letters>
          <Name>{name}</Name>
        </StyledCard>
      </CardLink>
      {modalOpen && (
        <Modal close={closeModal}>
          <ModalContent>
            <h1>Edit {name}</h1>
            <BookmarkForm closeModal={closeModal} operation="update" bookmark={{ id, letters, link, name }} />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default BookmarkCard
