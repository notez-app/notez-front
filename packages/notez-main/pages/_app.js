import React from 'react'
import App, { Container } from 'next/app'
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
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(NotezApp)
