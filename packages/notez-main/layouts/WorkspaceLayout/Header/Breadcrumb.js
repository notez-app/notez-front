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

const Breadcrumb = ({ pages }) => (
  <Flex as='nav' alignItems='center'>
    {pages.map((page, index) => (
      <>
        {index > 0 && <BreadcrumbDivider />}

        <BreadcrumbItem>
          <Emoji symbol={page.icon} mr='1' /> {page.name}
        </BreadcrumbItem>
      </>
    ))}
  </Flex>
)

export default Breadcrumb
