import { useState } from 'react'
import { Box, Flex } from 'flokit'
import { GlobalStyle, Container } from '../../components'
import WorkspaceSidebar from './WorkspaceSidebar'
import WorkspaceHeader from './WorkspaceHeader'

const WorkspaceLayout = ({ children, currentUser, logout }) => {
  const [isSidebarOpen, setSidebar] = useState(false)

  const onOpenSidebar = () => setSidebar(true)

  const onCloseSidebar = () => setSidebar(false)

  return (
    <>
      <GlobalStyle />

      <WorkspaceSidebar
        email={currentUser.email}
        logout={logout}
        isOpen={isSidebarOpen}
        onOpen={onOpenSidebar}
        onClose={onCloseSidebar}
      />

      <Flex flexDirection='column' height='100%' bg='white'>
        <WorkspaceHeader
          onOpenSidebar={onOpenSidebar}
          onCloseSidebar={onCloseSidebar}
        />

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
}

export default WorkspaceLayout
