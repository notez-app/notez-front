import To from 'next/link'
import { Box, Flex, Heading } from 'flokit'
import { Container, Link, Emoji } from '../../components'
import SiteNav from './SiteNav'

const SiteHeader = () => (
  <Box as='header' height='54px'>
    <Flex
      as={Container}
      justifyContent='space-between'
      alignItems='center'
      height='100%'
    >
      <To href='/'>
        <Heading as='h1' fontSize='5' fontWeight='2'>
          <Flex as={Link} alignItems='center'>
            <Emoji symbol='🗒' mr='2' fontSize='7' />
            Notez
          </Flex>
        </Heading>
      </To>

      <SiteNav />
    </Flex>
  </Box>
)

export default SiteHeader
