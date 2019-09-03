import { Box, Flex, Heading } from 'flokit'
import { SiteLayout } from '../layouts'
import { Container } from '../components'
import { checkCurrentUser, redirect } from '../lib'

const Home = () => (
  <SiteLayout>
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
  </SiteLayout>
)

Home.getInitialProps = async (ctx) => {
  const { currentUser } = await checkCurrentUser(ctx.apolloClient)

  if (currentUser) {
    redirect(ctx, '/workspace')
  }

  return {}
}

export default Home
