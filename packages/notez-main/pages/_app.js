import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
import { withApollo } from '../lib'
import theme from '../theme'

class NotezApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withApollo(NotezApp)
