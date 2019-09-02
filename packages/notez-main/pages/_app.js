import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
import { withApollo } from '../lib'
import { SiteLayout } from '../layouts'
import theme from '../theme'

class NotezApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    const { Layout = SiteLayout } = Component

    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withApollo(NotezApp)
