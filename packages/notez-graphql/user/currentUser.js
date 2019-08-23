import { gql } from 'apollo-boost'

const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      name
      email
    }
  }
`

export default CURRENT_USER
