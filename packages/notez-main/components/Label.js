import styled from 'styled-components'
import { Text } from 'flokit'

const Label = styled(Text)`
  text-transform: uppercase;
`

Label.defaultProps = {
  as: 'label',
  fontSize: '4',
  color: 'merlin',
  opacity: 0.6,
}

export default Label
