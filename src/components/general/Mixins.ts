import { css } from 'styled-components'

export const boxShadowMixin = css`
  box-shadow: 1px 1px 1px black;

  &:hover {
    box-shadow: 2px 2px 2px black;
  }
`

export const borderRadiusMixin = css`
  border-radius: 4px;
`

export const transitionMixin = css`
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
`

export const centeredFlexMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const columnCenteredMixin = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
