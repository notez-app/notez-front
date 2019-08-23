import { useState } from 'react'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { User } from '@notez/domain'
import { cookieService } from '@notez/infra'
import { LOGIN_USER } from '@notez/graphql'
import { Box, Flex, Heading, Text } from 'flokit'
import { Button, Container, Input, Label } from '../components'
import { checkCurrentUser, redirect } from '../lib'

const Login = () => {
  const client = useApolloClient()
  const [user, setUser] = useState(User.create())

  const onChange = (event) => {
    event.persist()
    const { name, value } = event.target

    setUser((user) => ({
      ...user,
      [name]: value,
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    loginUser({ variables: user })
  }

  const onCompleted = (data) => {
    setUser(User.create())

    cookieService.set('token', data.loginUser.token)
    client.cache.reset().then(() => {
      redirect('/workspace')
    })
  }

  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER, {
    onCompleted,
  })

  return (
    <Box as='section' height='100%'>
      <Container
        as={Flex}
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height='100%'
      >
        <Heading fontSize='9'>Login</Heading>

        <Box as='form' width='310px' mt='4' onSubmit={onSubmit}>
          <Label>Email</Label>
          <Input
            name='email'
            value={user.email}
            placeholder='foo@bar.com'
            type='email'
            onChange={onChange}
          />

          <Label>Password</Label>
          <Input
            mb='3'
            name='password'
            value={user.password}
            placeholder='foobar'
            type='password'
            onChange={onChange}
          />

          <Button width={1} mt='2' mb='2' type='submit'>
            Continue
          </Button>

          {error && !data && (
            <Text mt='3' color='red' fontSize='1.4rem' textAlign='center'>
              Something wrong happened :(
            </Text>
          )}
        </Box>
      </Container>
    </Box>
  )
}

Login.getInitialProps = async (ctx) => {
  const { currentUser } = await checkCurrentUser(ctx.apolloClient)

  if (currentUser) {
    redirect(ctx, '/workspace')
  }

  return {}
}

export default Login
