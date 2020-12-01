import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import {
  faBookmark,
  faFont,
  faLink,
  faMinusCircle,
  faQuoteLeft,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'
import { useMutation } from '../../hooks'
import { BookmarkType } from '../Bookmarks'
import { Button, Input } from '../general'

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  & :first-child {
    margin-right: 12px;
  }
`

type Props = {
  closeModal: () => void
}

const BookmarkForm = ({ closeModal }: Props) => {
  const { error, loading, runMutation } = useMutation<BookmarkType>('bookmarks', 'create')
  const { register, handleSubmit, errors } = useForm<BookmarkType>()
  const onSubmit = handleSubmit((data, event) => {
    event?.preventDefault()
    runMutation(data)
  })

  useEffect(() => {
    if (!error && !loading) {
      closeModal()
    }
  }, [error, loading])

  const isAVowel = (char: string) => {
    const upper = char.toUpperCase()
    return upper === 'A' || upper === 'E' || upper === 'I' || upper === 'O' || upper === 'U'
  }

  const inputs: { name: keyof BookmarkType; icon: IconDefinition }[] = [
    { name: 'letters', icon: faFont },
    { name: 'link', icon: faLink },
    { name: 'name', icon: faQuoteLeft }
  ]

  return (
    <form onSubmit={onSubmit}>
      {inputs.map(({ name, icon }, index) => {
        const label = name.charAt(0).toUpperCase() + name.slice(1)
        return (
          <Input
            key={index}
            name={name}
            icon={icon}
            label={label}
            placeholder={label}
            ref={register({ required: true })}
            error={errors[name] && `Please enter ${isAVowel(name[0]) ? 'an' : 'a'} ${name}`}
            style={{ marginBottom: 12 }}
          />
        )
      })}
      <ButtonGroup>
        <Button type="submit" icon={faBookmark}>
          Submit
        </Button>
        {/* TODO: make this work */}
        <Button type="reset" icon={faMinusCircle} color="secondary">
          Clear
        </Button>
      </ButtonGroup>
    </form>
  )
}

export default BookmarkForm
