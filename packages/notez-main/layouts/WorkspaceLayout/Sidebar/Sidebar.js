import styled from 'styled-components'
import posed from 'react-pose'
import { Box, Flex, Text } from 'flokit'
import { Avatar, Button } from '../../../components'
import HoverArea from './HoverArea'

const PosedSidebar = styled(
  posed(Box)({
    open: { x: '0' },
    closed: { x: '-100%' },
  })
)`
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
`

const SidebarItem = (props) => (
  <Flex
    alignItems='center'
    width={1}
    px='14px'
    py='10px'
    boxShadow='rgba(55, 53, 47, 0.09) 0px 1px 0px'
    {...props}
  />
)

const SidebarFooter = (props) => (
  <Flex
    py='2'
    justifyContent='center'
    alignItems='center'
    mt='auto'
    {...props}
  />
)

const Sidebar = ({ email, logout, isOpen, onOpen, onClose }) => (
  <HoverArea onMouseEnter={onOpen} onMouseLeave={onClose}>
    <PosedSidebar
      pose={isOpen ? 'open' : 'closed'}
      position='absolute'
      top='15px'
      left='0'
      width='280px'
      height='340px'
      borderRadius='0 3px 3px 0'
      bg='white'
      boxShadow='rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px'
    >
      <SidebarItem>
        <Avatar />

        <Text ml='12px' fontSize='14px'>
          Current Workspace
        </Text>
      </SidebarItem>

      <SidebarItem>
        <Avatar />

        <Text ml='12px' fontSize='14px'>
          Create or Join Workspace
        </Text>
      </SidebarItem>

      <SidebarFooter>
        <Button
          justifyContent='center'
          alignItems='center'
          width={1}
          height='28px'
          border='none'
          onClick={logout}
        >
          <Text fontSize='4' color='merlin' opacity='.6' verticalAlign='center'>
            Log Out ({email})
          </Text>
        </Button>
      </SidebarFooter>
    </PosedSidebar>
  </HoverArea>
)

export default Sidebar
