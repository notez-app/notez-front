import GlobalStyle from './GlobalStyle'
import { Box, Flex } from 'flokit'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

const Page = ({ children }) => (
  <>
    <GlobalStyle />

    <Flex flexDirection='column' height='100%'>
      <Header />

      <Box as='main' flex='1' pt='3'>
        {children}
      </Box>

      <Footer />
    </Flex>
  </>
)

export default Page
