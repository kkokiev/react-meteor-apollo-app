import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`;

class GoalForm extends Component {
  submitForm = e => {
    e.preventDefault();
    this.props.createGoal({
      variables: {
        name: this.name.value,
        resolutionId: this.props.resolutionId
      }
    }).then(({ data }) => {
      console.log(data);
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

export default graphql(createGoal, {
  name: 'createGoal'
})(GoalForm);