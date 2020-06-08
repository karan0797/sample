import { css } from '@emotion/core'

// export `mediaQueries` to constants/styles.js
const mediaQueries = {
  minTabletWidth: 'min-width: 800px',
  minDesktopWidth: 'min-width: 1100px'
}

export const pageStyle = css`
  padding: 20px;
  margin: 0 200px;
`

export const modalStyle = css`
  color: red;
`

export const buttonStyle = css`
  margin-left: 10px;
`

export const cardStyle = css`
  width: 100%;
  @media (${mediaQueries.minTabletWidth}) {
    width: 50%;
  }
  @media (${mediaQueries.minDesktopWidth}) {
    width: 25%;
  }
`
