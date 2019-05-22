import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

import Loader from 'react-loader-spinner';

class PatientLogin extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log(`--------------current auth state` + this.state.credentials);
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/dashboard');
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.loading ? (
              <Loader type="ThreeDots" color="purple" height="12" width="26" />
            ) : (
              'Log in'
            )}
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  login: state.login
});

export default connect(
  mapStateToProps,
  { login }
)(PatientLogin);
