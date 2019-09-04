import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'
import { environmentService } from '@notez/infra'

const uri = process.env.API_URL

if (environmentService.isServer()) {
  global.fetch = fetch
}

const initApollo = (initialState = {}, getToken = () => '') => {
  const isServer = environmentService.isServer()
  const isBrowser = environmentService.isBrowser()

  const httpLink = createHttpLink({
    uri,
    credentials: 'same-origin',
    fetch: isServer && fetch,
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
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
