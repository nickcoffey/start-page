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
