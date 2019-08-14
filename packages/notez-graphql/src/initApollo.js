import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'
import * as platform from './platform'

if (platform.isServer()) {
  global.fetch = fetch
}

const options = {
  uri: 'http://localhost:3000',
}

const initApollo = (initialState = {}, { uri } = options) => {
  const isServer = platform.isServer()
  const isBrowser = platform.isBrowser()

  const httpLink = createHttpLink({
    uri,
    credentials: 'same-origin',
    fetch: isServer && fetch,
  })

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const cache = new InMemoryCache().restore(initialState)

  const client = new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: isServer,
    link: authLink.concat(httpLink),
    cache,
  })

  return client
}

export default initApollo
