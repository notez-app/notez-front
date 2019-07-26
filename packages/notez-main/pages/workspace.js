import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Workspace = () => (
  <Query
    query={gql`
      {
        hello
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return <p>{data.hello}</p>
    }}
  </Query>
)

export default Workspace
