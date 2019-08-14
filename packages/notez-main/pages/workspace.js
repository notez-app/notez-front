import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Box, Flex, Heading, Text } from 'flokit'
import { Editable, Emoji } from '../components'
import { WorkspaceLayout } from '../layouts'

const types = {
  Text,
}

const Block = ({ type, children }) => {
  const BlockType = types[type]

  return (
    <BlockType as='div' width={1} mt='2px' mb='1px' lineHeight='24px'>
      <Editable>{children}</Editable>
    </BlockType>
  )
}

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

const Workspace = () => {
  const { loading, error, data } = useQuery(DEFAULT_WORKSPACE)

  if (loading) {
    return (
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

export default Workspace
