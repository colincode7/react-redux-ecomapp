import { LOGIN_SUCCESS, LOGIN_FAIL } from './AuthActions';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './AuthActions';

// Initial State
const initialState = {
  cusId: '', loginMessage: '', regMessage: ''};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS :
      return {
        cusId: action.username,
        loginMessage: action.message,
    };
    case LOGIN_FAIL:
      return {
        cusId: '',
        loginMessage: action.message,
    };
    case REGISTER_SUCCESS:
      return {
        cusId: action.username,
        regMessage: action.message,
    };
    case REGISTER_FAIL:
      return {
        cusId: '',
        regMessage: action.message,
    };

    default:
      return state;
  }
};

export const getCusId = state => state.auth.cusId;

// Export Reducer
export default AuthReducer;
