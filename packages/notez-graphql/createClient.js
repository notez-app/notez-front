import { environmentService } from '@notez/infra'
import { initApollo } from './apollo'

let apolloClient = null

const createClient = (initialState, getToken) => {
  if (environmentService.isServer()) {
    return initApollo(initialState, getToken)
  }

  if (!apolloClient) {
    apolloClient = initApollo(initialState, getToken)
  }

  return apolloClient
}

export default createClient
