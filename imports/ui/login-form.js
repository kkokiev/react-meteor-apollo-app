import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Accounts } from 'meteor/accounts-base';

class LoginForm extends Component {
  login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value,
      error => {
        if (!error) {
          this.props.client.resetStore();
        }
        console.log(error);
      }
    );
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <input type="submit" value="Login user" />
      </form>
    )
  }
}

export default LoginForm;
