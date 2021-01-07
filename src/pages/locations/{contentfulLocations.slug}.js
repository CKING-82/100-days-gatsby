import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';

// markup
const LocationPage = ({ data, params }) => {
  return (
    <Layout>
      <main>
        <h1>{data.contentfulLocations.name}</h1>
        <p>{data.contentfulLocations.about}</p>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    contentfulLocations(id: { eq: $id }) {
      slug
      id
      name
      about
    }
  }
`;

export default LocationPage;