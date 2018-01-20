import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const hiQuery = gql`
  {
    hi
  }
`;

const App = ({ data }) =>
  <h1>{data.hi}</h1>;

App.propTypes = {
  data: PropTypes.object
};

export default graphql(
  hiQuery
)(App);
