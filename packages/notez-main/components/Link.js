import styled from 'styled-components'
import { Text } from 'flokit'

const Link = styled(Text)`
  text-decoration: none;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`

Link.defaultProps = {
  as: 'a',
  color: 'black',
}

export default Link
