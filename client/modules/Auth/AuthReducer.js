import { LOGIN_SUCCESS, LOGIN_FAIL } from './AuthActions';
import { REGISTER_SUCCESS } from './AuthActions';

// Initial State
const initialState = {
  cusId: '' };

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS :
      return {
        cusId: action.username,
        message: action.message,
    };
    case LOGIN_FAIL:
      return {
        cusId: '',
        message: action.message,
    };

    default:
      return state;
  }
};

export const getCusId = state => state.auth.cusId;

// Export Reducer
export default AuthReducer;
