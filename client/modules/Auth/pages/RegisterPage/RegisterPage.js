import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './RegisterPage.css';
import { registerRequest } from '../../AuthActions.js';

class RegisterPage extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
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

    this.props.register(username, password);
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
          <h2 className={styles['form-title']}>Register</h2>
          <label htmlFor="sername" className="sr-only">Username</label>
          <input className={styles['form-field']} placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" className={styles['form-field']} placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className={styles['register-button']} type="submit">Register</button>
          <p>
            Already Registered? <Link to="/login"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Go to Login!</Link>
          </p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.auth.regMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register: (username, password) => {dispatch(registerRequest(username, password))}
  };
}

RegisterPage.propTypes = {
    register: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
