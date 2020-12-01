import React, { ReactNode, useContext, useState } from 'react'
import styled from 'styled-components'
import { faBacon, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../App'
import { Input, Button, Card, Spinner, Modal } from '../components/general'

const SectionLabel = styled.h2`
  text-decoration: underline;
`

const SectionSpacer = styled.div`
  margin-top: 100px;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 24px;
  }

  & > :first-child {
    margin-left: 0px;
  }
`

const ModalContent = styled.div`
  height: 200px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColorBox = styled.div<{ backgroundColor: string; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`

const ThemePage = () => {
  const theme = useContext(ThemeContext)
  const [showModal, setShowModal] = useState(false)

  type SectionProps = {
    children: ReactNode
    noParentContainer?: boolean
    label: string
  }
  const Section = ({ children, noParentContainer, label }: SectionProps) => (
    <>
      <SectionLabel>{label}</SectionLabel>
      {noParentContainer ? <>{children}</> : <SectionContainer>{children}</SectionContainer>}
    </>
  )

  const ComponentSection = ({ label, children }: Omit<SectionProps, 'noParentContainer'>) => (
    <>
      <h3>{label}</h3>
      <SectionContainer>{children}</SectionContainer>
    </>
  )

  return (
    <>
      <h1>Theme</h1>
      <hr />

      <Section label="Components" noParentContainer>
        <ComponentSection label="Button">
          <Button icon={faBacon}>Primary</Button>
          <Button icon={faBacon} color="secondary">
            Secondary
          </Button>
          <Button icon={faTimesCircle} disabled>
            Disabled
          </Button>
        </ComponentSection>

        <ComponentSection label="Input">
          <Input icon={faSearch} placeholder="Enter text here..." />
        </ComponentSection>

        <ComponentSection label="Card">
          <Card>Basic Card</Card>
        </ComponentSection>

        <ComponentSection label="Spinner">
          <Spinner />
        </ComponentSection>

        <ComponentSection label="Modal">
          <Button onClick={() => setShowModal(true)}>Show Modal</Button>
          {showModal && (
            <Modal close={() => setShowModal(false)}>
              <ModalContent>Click outside to close</ModalContent>
            </Modal>
          )}
        </ComponentSection>
      </Section>

      <SectionSpacer />

      <Section label="Typography">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p>Paragraph</p>
      </Section>

      <SectionSpacer />

      <Section label="Colors">
        <ColorBox color={theme.primaryText} backgroundColor={theme.primary}>
          Primary
        </ColorBox>
        <ColorBox color={theme.secondaryText} backgroundColor={theme.secondary}>
          Secondary
        </ColorBox>
      </Section>
    </>
  )
}

export default ThemePage
