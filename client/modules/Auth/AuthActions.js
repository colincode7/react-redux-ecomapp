import callApi from '../../util/apiCaller';
import { browserHistory } from 'react-router';

// Export Constants
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL= 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

// Export Actions
export function loginRequest(username, password) {
  return (dispatch) => {
    return callApi('login', 'post', {
      username,
      password
    }).then(res => {
      if(res.success == true){
        console.log('Login succesful!' + res);
        dispatch(loginSuccessful(username, ''));
        dispatch(setCusId(username));
        localStorage.setItem('jwtToken', res.token);
      } else {
        dispatch(loginFailed('Login Failed!'));
      }
      browserHistory.push('/');
    });
  };
}

// Export Actions
export function registerRequest(username, password) {
  return (dispatch) => {
    return callApi('register', 'post', {
      username: username,
      password: password,
    }).then(res => {
      if(res.success == true){
        console.log('Register succesful' + res.newuser);
        dispatch(registerSuccessful(''));
        browserHistory.push('/login');
      } else {
        dispatch(registerFailed('Registration Failed. Try Again!'));
      }
    });
  };
}

export function loginSuccessful(username, message) {
  return {
    type: LOGIN_SUCCESS,
    username,
    message,
  };
}

export function loginFailed(message) {
  return {
    type: LOGIN_FAIL,
    message,
  };
}

export function registerSuccessful(username, message) {
  return {
    type: REGISTER_SUCCESS,
    username,
    message,
  };
}

export function registerFailed(message) {
  return {
    type: REGISTER_FAIL,
    message,
  };
}

export function setCusId(cusId) {
  return {
    type: 'SET_CUSID',
    cusId
  };
}
