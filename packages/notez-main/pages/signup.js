import { Box, Flex, Heading } from 'flokit'
import { Button, Container, Input, Label } from '../components'

const SignUp = () => (
  <Box as='section' height='100%'>
    <Container
      as={Flex}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100%'
    >
      <Heading fontSize='9'>Sign Up</Heading>

      <Box width='310px' mt='4'>
        <Label>Name</Label>
        <Input placeholder='Foo Bar' />

        <Label>Email</Label>
        <Input placeholder='foo@bar.com' type='email' />

        <Label>Password</Label>
        <Input placeholder='foobar' type='password' />

        <Label>Password Confirmation</Label>
        <Input placeholder='foobar' type='password' mb='4' />

        <Button width={1}>Continue</Button>
      </Box>
    </Container>
  </Box>
)

export default SignUp
