import apolloClient from './apolloClient'
import { isServer } from './isomorphic'

let client = null

const createApolloClient = (initialState, options) => {
  if (isServer()) {
    return apolloClient(initialState, options)
  }

  if (!client) {
    client = apolloClient(initialState, options)
  }

  return client
}

export default createApolloClient
