import * as React from "react"
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
// markup
const location = ({ data }) => {
  return (
    <Layout>
      <h1>Locations</h1>
      <p>Come visit us in one of our locations</p>
      <nav>
        {data.allContentfulLocations.nodes.map((location) => {
          return (
            <li id={location.id}>
              <Link to={`/locations/${location.slug}`}>{location.name}</Link>
            </li>
          )
        })}
      </nav>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulLocations {
    nodes {
      name
      id
      slug
      about
    }
  }
}
`;

export default location
