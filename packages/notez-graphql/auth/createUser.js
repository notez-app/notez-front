import { gql } from 'apollo-boost'

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
    }
  }
`

export default CREATE_USER
