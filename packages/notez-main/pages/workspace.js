import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Box, Flex, Heading, Text } from 'flokit'
import { Block, Editable, Emoji } from '../components'
import { WorkspaceLayout } from '../layouts'
import { checkCurrentUser } from '../lib'

const DEFAULT_WORKSPACE = gql`
  {
    defaultWorkspace {
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
  console.log({ currentUser })

  const { loading, error, data } = useQuery(DEFAULT_WORKSPACE)

  if (loading) {
    return (
      // Exibir um spinner mais bonitinho?
      <Text fontSize='14px' color='gray'>
        Loading...
      </Text>
    )
  }

  const page = data.defaultWorkspace.pages[0]

  return (
    <Flex as='section' flexDirection='column' width={1} height='100%'>
      <Box as='header' mt='5' mb='3'>
        {page.icon && <Emoji symbol={page.icon} label='car' fontSize='10' />}

        {/* Usar o component BLock como `type` Heading? */}
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
  )
}

Workspace.Layout = WorkspaceLayout

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
