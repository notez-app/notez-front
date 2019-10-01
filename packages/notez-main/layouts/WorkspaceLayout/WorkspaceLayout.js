import { useState } from 'react'
import { Box, Flex } from 'flokit'
import { GlobalStyle } from '../../components'
import Sidebar from './Sidebar'
import Header from './Header'

const WorkspaceLayout = ({
  children,
  currentUser,
  selectedWorkspace,
  logout,
}) => {
  const [isSidebarOpen, setSidebar] = useState(false)

  const onOpenSidebar = () => setSidebar(true)

  const onCloseSidebar = () => setSidebar(false)

  return (
    <>
      <GlobalStyle />

      <Sidebar
        currentUser={currentUser}
        selectedWorkspace={selectedWorkspace}
        logout={logout}
        isOpen={isSidebarOpen}
        onOpen={onOpenSidebar}
        onClose={onCloseSidebar}
      />

      <Flex flexDirection='column' height='100%' bg='white'>
        <Header
          pages={selectedWorkspace.pages}
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
