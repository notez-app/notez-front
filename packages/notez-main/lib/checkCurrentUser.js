import { CURRENT_USER } from '@notez/graphql'

const checkCurrentUser = (apolloClient) =>
  apolloClient
    .query({ query: CURRENT_USER })
    .then(({ data }) => data)
    .catch(() => ({}))

export default checkCurrentUser
