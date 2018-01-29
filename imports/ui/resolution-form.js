import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {

  submitForm = e => {
    e.preventDefault();
    this.props.createResolution({
      variables: {
        name: this.name.value
      }
    }).then(({ data }) => {
      // refetch updated data
      this.props.refetch();
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <form>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </form>
    );
  }
}

export default graphql(createResolution, {
  name: 'createResolution'
})(ResolutionForm);
