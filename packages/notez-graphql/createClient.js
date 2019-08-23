import { environmentService } from '@notez/infra'
import { initApollo } from './apollo'

let apolloClient = null

const createClient = (initialState, options) => {
  if (environmentService.isServer()) {
    return initApollo(initialState, options)
  }

  if (!apolloClient) {
    apolloClient = initApollo(initialState, options)
  }

  return apolloClient
}

export default createClient
