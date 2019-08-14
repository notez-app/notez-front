import { useState } from 'react'
import Router from 'next/router'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Box, Flex, Heading, Text } from 'flokit'
import { Button, Container, Input, Label } from '../components'

const Credentials = () => ({
  email: '',
  password: '',
})

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`

const Login = () => {
  const client = useApolloClient()
  const [credentials, setCredentials] = useState(Credentials())

  const onChange = (event) => {
    event.persist()
    const { name, value } = event.target

    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    loginUser({ variables: credentials })
  }

  const onCompleted = (data) => {
    setCredentials(Credentials())
    localStorage.setItem('token', data.loginUser.token)
    client.cache.reset().then(() => {
      Router.replace('/workspace')
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
            value={credentials.email}
            placeholder='foo@bar.com'
            type='email'
            onChange={onChange}
          />

          <Label>Password</Label>
          <Input
            mb='3'
            name='password'
            value={credentials.password}
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

export default Login
