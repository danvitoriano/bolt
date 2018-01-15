import { css } from 'styled-components'
import colors from '@pismo/bolt-colors'

const disabledStyle = css`
  pointer-events: none;
  color: ${colors.gray300};
  background-color: transparent;
  text-decoration: none;
  cursor: 'not-allowed';
`

export default disabledStyle