import { Box } from 'flokit'

const HoverArea = (props) => (
  <Box
    position='fixed'
    top='45px'
    left='0'
    width='48px'
    height='100%'
    {...props}
  />
)

export default HoverArea
