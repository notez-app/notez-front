import { useState } from 'react'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { User } from '@notez/domain'
import { cookieService } from '@notez/infra'
import { CREATE_USER } from '@notez/graphql'
import { Box, Flex, Heading, Text } from 'flokit'
import { SiteLayout } from '../layouts'
import { Button, Container, Emoji, Input, Label } from '../components'
import { checkCurrentUser, redirect } from '../lib'

const SignUp = () => {
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

    createUser({ variables: user })
  }

  const onCompleted = (data) => {
    setUser(User.create())

    cookieService.set('token', data.createUser.token)
    client.cache.reset().then(() => {
      redirect('/workspace')
    })
  }

  const [createUser, { loading, error, data }] = useMutation(CREATE_USER, {
    onCompleted,
  })

  return (
    <SiteLayout>
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
            <Label>First Name</Label>
            <Input
              name='firstName'
              placeholder='Jane'
              value={user.firstName}
              onChange={onChange}
            />

            <Label>Last Name</Label>
            <Input
              name='lastName'
              placeholder='Doe'
              value={user.lastName}
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
                Something wrong happened <Emoji symbol='😢' />
              </Text>
            )}
          </Box>
        </Container>
      </Box>
    </SiteLayout>
  )
}

SignUp.getInitialProps = async (ctx) => {
  const { currentUser } = await checkCurrentUser(ctx.apolloClient)

  if (currentUser) {
    redirect(ctx, '/workspace')
  }

  return {}
}

export default SignUp
