import { Box, Flex, Heading } from 'flokit'
import { Container } from '../components'

const Home = () => (
  <Box as='section' height='100%'>
    <Container
      as={Flex}
      justifyContent='flex-start'
      alignItems='center'
      height='100%'
    >
      <Heading fontSize='10' width='406px'>
        Open-source notes app
      </Heading>
    </Container>
  </Box>
)

export default Home
