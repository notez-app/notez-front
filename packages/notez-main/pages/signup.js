import { useState } from 'react'
import Router from 'next/router'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Box, Flex, Heading, Text } from 'flokit'
import { Button, Container, Input, Label } from '../components'

const User = () => ({
  name: '',
  email: '',
  password: '',
})

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
    }
  }
`

const SignUp = () => {
  const client = useApolloClient()
  const [user, setUser] = useState(User())

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

    createUser({ variables: user })
  }

  const onCompleted = (data) => {
    setUser(User())
    localStorage.setItem('token', data.createUser.token)
    client.cache.reset().then(() => {
      Router.replace('/workspace')
    })
  }

  const [createUser, { loading, error, data }] = useMutation(CREATE_USER, {
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
        <Heading fontSize='9'>Sign Up</Heading>

        <Box as='form' width='310px' mt='4' onSubmit={onSubmit}>
          <Label>Name</Label>
          <Input
            name='name'
            placeholder='Foo Bar'
            value={user.name}
            onChange={onChange}
          />

          <Label>Email</Label>
          <Input
            name='email'
            value={user.email}
            type='email'
            placeholder='foo@bar.com'
            onChange={onChange}
          />

          <Label>Password</Label>
          <Input
            mb='3'
            name='password'
            value={user.password}
            type='password'
            placeholder='foobar'
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

export default SignUp
