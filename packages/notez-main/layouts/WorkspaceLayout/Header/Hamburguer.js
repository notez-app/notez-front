import { Box, Flex } from 'flokit'

const Bar = (props) => (
  <Box width='16px' height='2px' bg='merlin' opacity='.8' {...props} />
)

const SidebarTrigger = (props) => (
  <Flex
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    height='100%'
    mr='1'
    ml={-3}
    px='3'
    py='12px'
    {...props}
  >
    <Bar />
    <Bar my='4px' />
    <Bar />
  </Flex>
)

export default SidebarTrigger
