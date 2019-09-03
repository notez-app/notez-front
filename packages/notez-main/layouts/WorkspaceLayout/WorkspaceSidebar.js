import styled from 'styled-components'
import posed from 'react-pose'
import { Box, Flex, Text } from 'flokit'

const Sidebar = styled(
  posed(Box)({
    open: { x: '0' },
    closed: { x: '-100%' },
  })
)`
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
`

const WorkspaceSidebar = ({ email, logout, isOpen, onOpen, onClose }) => (
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
      width='280px'
      height='340px'
      borderRadius='0 3px 3px 0'
      bg='white'
      boxShadow='rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px'
    >
      <Box width={1} pt='2'>
        <Flex
          alignItems='center'
          width={1}
          px='14px'
          py='10px'
          boxShadow='rgba(55, 53, 47, 0.09) 0px 1px 0px'
        >
          <Box
            width='32px'
            height='32px'
            borderRadius='2px'
            bg='merlin'
            opacity='.4'
          />

          <Box ml='12px'>
            <Text fontSize='14px'>Workspace</Text>
          </Box>
        </Flex>

        <Flex
          alignItems='center'
          width={1}
          px='14px'
          py='10px'
          boxShadow='rgba(55, 53, 47, 0.09) 0px 1px 0px'
        >
          <Box
            width='32px'
            height='32px'
            borderRadius='2px'
            bg='merlin'
            opacity='.4'
          />

          <Box ml='12px'>
            <Text fontSize='14px'>Create or Join Workspace</Text>
          </Box>
        </Flex>
      </Box>

      <Flex py='2' justifyContent='center' alignItems='center' mt='auto'>
        <Flex alignItems='center' height='28px' onClick={logout}>
          <Text
            fontSize='12px'
            color='merlin'
            opacity='.6'
            verticalAlign='center'
          >
            Log Out ({email})
          </Text>
        </Flex>
      </Flex>
    </Sidebar>
  </Box>
)

export default WorkspaceSidebar
