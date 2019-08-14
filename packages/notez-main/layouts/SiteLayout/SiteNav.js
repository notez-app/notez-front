import To from 'next/link'
import { Flex } from 'flokit'
import { Link } from '../../components'

const SiteNav = () => (
  <Flex as='nav'>
    <To href='/signup'>
      <Link px='2'>Sign up</Link>
    </To>

    <To href='/login'>
      <Link px='2'>Log in</Link>
    </To>
  </Flex>
)

export default SiteNav
