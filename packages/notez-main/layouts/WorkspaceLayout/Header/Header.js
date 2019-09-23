import { Box, Flex } from 'flokit'
import Breadcrumb from './Breadcrumb'
import Hamburguer from './Hamburguer'

const Header = ({ pages, onOpenSidebar, onCloseSidebar }) => (
  <Box
    as='header'
    position='fixed'
    top='0'
    left='0'
    width={1}
    height='45px'
    bg='white'
  >
    <Flex justifyContent='flex-start' alignItems='center' height='100%' px='3'>
      <Hamburguer onMouseEnter={onOpenSidebar} onMouseLeave={onCloseSidebar} />

      <Breadcrumb pages={pages} />
    </Flex>
  </Box>
)

export default Header
