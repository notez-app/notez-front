import styled from 'styled-components'
import posed from 'react-pose'
import { Box } from 'flokit'

const Sidebar = styled(
  posed(Box)({
    open: { x: '0' },
    closed: { x: '-101%' },
  })
)`
  transform: translateX(-100%);
`

const WorkspaceSidebar = ({ isOpen = false, onOpen, onClose }) => (
  <Box
    position='fixed'
    top='45px'
    left='0'
    width='48px'
    height='100%'
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    <Sidebar
      pose={isOpen ? 'open' : 'closed'}
      position='absolute'
      top='15px'
      left='0'
      width='240px'
      height='380px'
      borderRadius='0 3px 3px 0'
      bg='white'
      boxShadow='rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px'
    ></Sidebar>
  </Box>
)

export default WorkspaceSidebar
