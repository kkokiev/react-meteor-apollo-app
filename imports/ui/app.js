import React from 'react';
import PropTypes from 'prop-types';

import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';

import RegisterForm from './register-form';
import LoginForm from './login-form';
import ResolutionForm from './resolution-form';
import GoalForm from './goal-form';

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
    user {
      _id
    }
  }
`;

// client prop coming from withApollo
const App = ({ loading, resolutions, client }) => {
  if(loading) return <div>Loading</div>;
  return (
    <div>
      <button onClick={() => {
        Meteor.logout();
        client.resetStore();
      }}>Log out</button>
      <RegisterForm client={client} />
      <LoginForm client={client} />
      <ResolutionForm />
      <ul>
        {resolutions.map(res =>
          <li key={res._id}>
            {res.name}
            <GoalForm resolutionId={res._id} />
          </li>
        )}
      </ul>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.object
};

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
