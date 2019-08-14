import { Box, Flex } from 'flokit'
import { GlobalStyle } from '../../components'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const SiteLayout = ({ children }) => (
  <>
    <GlobalStyle />

    <Flex flexDirection='column' height='100%'>
      <SiteHeader />

      <Box as='main' flex='1' pt='3'>
        {children}
      </Box>

      <SiteFooter />
    </Flex>
  </>
)

export default SiteLayout
