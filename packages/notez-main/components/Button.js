import styled from 'styled-components'
import { Button as BaseButton } from 'flokit'

const Button = styled(BaseButton)`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

Button.defaultProps = {
  minWidth: '122px',
  height: '36px',
  py: 0,
  px: 3,
  border: 'merino',
  borderRadius: '4px',
  fontSize: 'inherit',
  fontWeight: 1,
  color: 'red',
}

export default Button
