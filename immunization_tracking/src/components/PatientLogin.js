import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

import { Input } from 'reactstrap';

class PatientLogin extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    submitted: false
  };

  // componentDidMount = () => {
  //   if (this.props.location.state) {
  //     console.log(this.props.location.state);
  //     if (
  //       this.props.location.state.email &&
  //       this.props.location.state.password
  //     ) {
  //       this.setState({
  //         credentials: {
  //           email: this.props.location.state.email,
  //           password: this.props.location.state.password
  //         }
  //       });
  //     }
  //   }
  // };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    // console.log(`--------------current auth state`, this.state.creds);
    if (this.state.credentials.username && this.state.credentials.password) {
      this.props
        .login(this.state.credentials)
        .then(() => this.props.history.push('/patient-dashboard'));
    }
  };

  //   this.props.login(this.state.creds).then(() => {
  //     this.props.history.push('/patient-dashboard');
  //   });
  // };

  render() {
    console.log(`-----------------------this.props`, this.props);
    return (
      <div>
        <form onSubmit={this.handleLogin}>
        <div>
          {this.state.submitted  && ! this.state.credentials.username && (
            <p>username req</p>
          )}
          {this.props.error && (
            <p>invalid credentials</p>
          )}
        </div>
          <Input
            placeholder="username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
        <div>
          {this.state.submitted  && ! this.state.credentials.password && (
            <p>password req</p>
          )}
          {this.props.error && (
            <p>invalid credentials</p>
          )}
        </div>
          <Input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>login</button>
          {/* onClick={this.login} */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { login }
)(PatientLogin);
