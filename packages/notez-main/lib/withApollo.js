import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { getDataFromTree } from '@apollo/react-ssr'
import { cookieService } from '@notez/infra'
import { createClient } from '@notez/graphql'
import getDisplayName from './getDisplayName'

const withApollo = (App) => {
  class WithApollo extends Component {
    static displayName = `WithApollo(${getDisplayName(App)})`

    static defaultProps = {
      apolloState: {},
    }

    static propTypes = {
      apolloState: PropTypes.object,
    }

    static async getInitialProps(ctx) {
      const {
        Component,
        router,
        ctx: { req, res },
      } = ctx

      const cookies = req ? req.headers.cookie || '' : document.cookie

      const apollo = createClient(null, () =>
        cookieService.get('token', cookies)
      )

      ctx.ctx.apolloClient = apollo

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {}
      }

      if (typeof window === 'undefined') {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState,
      }
    }

    constructor(props) {
      super(props)
      this.apolloClient = createClient(props.apolloState, () =>
        cookieService.get('token')
      )
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }

  return WithApollo
}

export default withApollo
