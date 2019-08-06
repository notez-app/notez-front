import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { withApolloClient } from '../graphql'
import Page from '../components/Page'
import theme from '../theme'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
