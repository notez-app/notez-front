import To from 'next/link'
import { Box, Flex, Text } from 'flokit'
import { Emoji, Link } from '../../components'

const WorkspaceHeader = ({ onOpenSidebar, onCloseSidebar }) => (
  <Box
    as='header'
    position='fixed'
    top='0'
    left='0'
    width={1}
    height='45px'
    bg='white'
  >
    <Flex justifyContent='flex-start' alignItems='center' height='100%' px='3'>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height='100%'
        mr='1'
        ml={-3}
        px='3'
        py='12px'
        onMouseEnter={onOpenSidebar}
        onMouseLeave={onCloseSidebar}
      >
        <Box width='16px' height='2px' bg='merlin' opacity='.8' />
        <Box width='16px' height='2px' bg='merlin' opacity='.8' my='4px' />
        <Box width='16px' height='2px' bg='merlin' opacity='.8' />
      </Flex>

      <Flex as='nav' alignItems='center'>
        <To href='/workspace'>
          <Flex as={Link} alignItems='center' fontSize='14px' color='merlin'>
            <Emoji symbol='⛰' mr='1' /> Get Started
          </Flex>
        </To>

        {/* <Text as='span' mx='2' fontSize='14px' color='merlin' opacity='.4'>
          /
        </Text>

        <To href='/workspace'>
          <Flex as={Link} alignItems='center' fontSize='14px' color='merlin'>
            <Emoji symbol='😄' mr='1' /> With Subpage
          </Flex>
        </To> */}
      </Flex>
    </Flex>
  </Box>
)

export default WorkspaceHeader
