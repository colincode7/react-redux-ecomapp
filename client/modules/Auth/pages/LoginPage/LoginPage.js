import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './Login.css';
//import styles from './PlaceOrderPage.css';
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
      <div className={styles['form-content']}>
        <form className="form-signin" onSubmit={this.onSubmit}>
          {this.props.message !== '' &&
            <div className="alert alert-warning alert-dismissible" role="alert">
              { this.props.message }
            </div>
          }
          <h2 className={styles['form-title']}>Please sign in</h2>
          <label htmlFor="username" className="sr-only">Username</label>
          <input className={styles['form-field']} placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" className={styles['form-field']} placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className={styles['login-button']} type="submit">Login</button>
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
    message: state.auth.loginMessage
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
