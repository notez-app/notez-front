import { gql } from 'apollo-boost'

const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      email
    }
  }
`

export default CURRENT_USER
