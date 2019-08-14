import initApollo from './initApollo'
import * as platform from './platform'

let apolloClient = null

const createClient = (initialState, options) => {
  if (platform.isServer()) {
    return initApollo(initialState, options)
  }

  if (!apolloClient) {
    apolloClient = initApollo(initialState, options)
  }

  return apolloClient
}

export default createClient
