import styled from 'styled-components'
import { Box } from 'flokit'

const Input = styled(Box)`
  outline: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: ${(props) => props.theme.fontWeights[1]};
  transition: border-color 0.3s ease;
  box-shadow: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-family: inherit;
    font-size: inherit;
  }
`

Input.defaultProps = {
  as: 'input',
  type: 'text',
  width: 1,
  height: '36px',
  py: 2,
  px: 3,
  border: 'merino',
  borderRadius: '4px',
  bg: 'white',
  color: 'black',
  mt: 1,
  mb: 3,
}

export default Input
