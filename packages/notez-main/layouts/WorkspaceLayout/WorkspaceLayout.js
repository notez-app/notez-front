import { Flex } from 'flokit'
import { GlobalStyle, Container } from '../../components'
import WorkspaceHeader from './WorkspaceHeader'

const WorkspaceLayout = ({ children }) => (
  <>
    <GlobalStyle />

    <Flex flexDirection='column' height='100%' bg='white'>
      <WorkspaceHeader />

      <Flex
        as='main'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        width={1}
        maxWidth='900px'
        height='100%'
        m='45px auto 0'
        px='6'
      >
        {children}
      </Flex>
    </Flex>
  </>
)

export default WorkspaceLayout
