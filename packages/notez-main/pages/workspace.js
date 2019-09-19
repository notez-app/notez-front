import { useQuery, useApolloClient } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Box, Flex, Heading, Text } from 'flokit'
import { cookieService } from '@notez/infra'
import { Block, Editable, Emoji } from '../components'
import { WorkspaceLayout } from '../layouts'
import { checkCurrentUser, redirect } from '../lib'

const DEFAULT_WORKSPACE = gql`
  {
    selectedWorkspace {
      name
      pages {
        icon
        name
        blocks {
          __typename
          ... on Text {
            content
          }
        }
      }
    }
  }
`

const Workspace = ({ currentUser }) => {
  const client = useApolloClient()
  const { loading, error, data } = useQuery(DEFAULT_WORKSPACE)

  if (loading) {
    return (
      <Text fontSize='14px' color='gray'>
        Loading...
      </Text>
    )
  }

  const logout = () => {
    cookieService.set('token', '', { maxAge: -1 })

    client.cache.reset().then(() => {
      redirect('/')
    })
  }

  const page = data.selectedWorkspace.pages[0]

  return (
    <WorkspaceLayout currentUser={currentUser} logout={logout}>
      <Flex as='section' flexDirection='column' width={1} height='100%'>
        <Box as='header' mt='5' mb='3'>
          {page.icon && <Emoji symbol={page.icon} fontSize='10' />}

          <Heading as='div' fontSize='8' fontWeight='5'>
            <Editable>{page.name}</Editable>
          </Heading>
        </Box>

        <Flex
          as='article'
          flex='1'
          flexDirection='column'
          alignItems='center'
          pb='30vh'
        >
          {page.blocks.map((block) => (
            <Block type={block.__typename} key={block.content}>
              {block.content}
            </Block>
          ))}
        </Flex>
      </Flex>
    </WorkspaceLayout>
  )
}

Workspace.getInitialProps = async (ctx) => {
  const { currentUser } = await checkCurrentUser(ctx.apolloClient)

  if (!currentUser) {
    // Mandar pra alguma pagina mais util que a home?
    // Talvez alguma pagina especifica pra unificar login e signup como o Notion faz?
    redirect(ctx, '/')
  }

  return {
    currentUser,
  }
}

export default Workspace
