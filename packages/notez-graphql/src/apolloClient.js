import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import { isBrowser } from './isomorphic'

const appolloClient = (initialState = {}, options = {}) => {
  const {
    uri = 'http://localhost:3000/graphql',
    credentials = 'same-origin',
  } = options

  const link = new HttpLink({
    uri,
    credentials,
    fetch: !isBrowser() && fetch,
  })

  const cache = new InMemoryCache().restore(initialState)

  const client = new ApolloClient({
    connectToDevTools: isBrowser(),
    ssrMode: !isBrowser(),
    link,
    cache,
  })

  return client
}

export default appolloClient
