import To from 'next/link'
import { Flex, Text } from 'flokit'
import { Emoji, Link } from '../../../components'

const BreadcrumbItem = ({ href, children, ...props }) => (
  <To href={href}>
    <Flex
      as={Link}
      alignItems='center'
      fontSize='14px'
      color='merlin'
      {...props}
    >
      {children}
    </Flex>
  </To>
)

const BreadcrumbDivider = () => (
  <Text as='span' mx='2' fontSize='14px' color='merlin' opacity='.4'>
    /
  </Text>
)

const Breadcrumb = () => (
  <Flex as='nav' alignItems='center'>
    <BreadcrumbItem href='/workspace'>
      <Emoji symbol='⛰' mr='1' /> Get Started
    </BreadcrumbItem>

    <BreadcrumbDivider />

    <BreadcrumbItem href='/workspace'>
      <Emoji symbol='😄' mr='1' /> With Subpage
    </BreadcrumbItem>
  </Flex>
)

export default Breadcrumb
