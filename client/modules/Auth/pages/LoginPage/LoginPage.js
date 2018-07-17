import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './Login.css';
import { loginRequest } from '../../AuthActions.js';

class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    this.props.login(username, password);
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          {this.props.message !== '' &&
            <div className="alert alert-warning alert-dismissible" role="alert">
              { this.props.message }
            </div>
          }
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="username" className="sr-only">Username</label>
          <input className="form-control" placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          <p>
            Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
          </p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {dispatch(loginRequest(username, password))}
  };
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
