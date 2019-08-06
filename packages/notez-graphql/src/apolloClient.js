import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import { isBrowser } from './isomorphic'

const options = {
  uri: '',
}

const appolloClient = ({ uri } = options, initialState = {}) => {
  const link = new HttpLink({
    uri,
    credentials: 'same-origin',
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
