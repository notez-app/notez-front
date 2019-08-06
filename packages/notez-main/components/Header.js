import To from 'next/link'
import { Box, Flex, Heading } from 'flokit'
import Container from './Container'
import Link from './Link'
import NavLink from './NavLink'
import Emoji from './Emoji'

const Header = () => (
  <Box as='header' height='54px'>
    <Flex
      as={Container}
      justifyContent='space-between'
      alignItems='center'
      height='100%'
    >
      <Title />

      <Nav />
    </Flex>
  </Box>
)

const Title = () => (
  <To href='/'>
    <Heading as='h1' fontSize='5' fontWeight='2'>
      <Flex as={Link} alignItems='center'>
        <Emoji symbol='🗒' mr='2' fontSize='7' />
        Notez
      </Flex>
    </Heading>
  </To>
)

const Nav = () => (
  <Flex as='nav'>
    <To href='/signup'>
      <NavLink>Sign up</NavLink>
    </To>

    <To href='/login'>
      <NavLink>Log in</NavLink>
    </To>
  </Flex>
)

export default Header
