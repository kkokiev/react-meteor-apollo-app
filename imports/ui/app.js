import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './resolution-form';

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

const App = ({ data }) => {
  if(data.loading) return <div>Loading</div>;
  return (
    <div>
      <h1>{data.hi}</h1>
      <ResolutionForm  refetch={data.refetch} />
      <ul>
        {data.resolutions.map(res => <li key={res._id}>{res.name}</li>)}
      </ul>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.object
};

export default graphql(
  hiQuery
)(App);
