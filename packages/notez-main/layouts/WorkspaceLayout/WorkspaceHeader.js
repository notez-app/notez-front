import To from 'next/link'
import { Box, Flex, Text } from 'flokit'
import { Emoji, Link } from '../../components'

const WorkspaceHeader = () => (
  <Box
    as='header'
    position='fixed'
    top='0'
    left='0'
    width={1}
    height='45px'
    bg='white'
  >
    <Flex
      justifyContent='space-between'
      alignItems='center'
      height='100%'
      px='3'
    >
      <Flex as='nav' alignItems='center'>
        <To href='/workspace'>
          <Flex as={Link} alignItems='center' fontSize='14px' color='merlin'>
            <Emoji symbol='⛰' label='car' mr='1' /> Get Started
          </Flex>
        </To>

        {/* <Text as='span' mx='2' fontSize='14px' color='merlin' opacity='.4'>
          /
        </Text>

        <To href='/workspace'>
          <Flex as={Link} alignItems='center' fontSize='14px' color='merlin'>
            <Emoji symbol='😄' label='car' mr='1' /> With Subpage
          </Flex>
        </To> */}
      </Flex>
    </Flex>
  </Box>
)

export default WorkspaceHeader
