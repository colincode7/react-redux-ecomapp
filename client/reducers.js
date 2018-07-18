/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import cart from './modules/Cart/CartReducer';
import items from './modules/Item/ItemReducer';
import order from './modules/Order/OrderReducer';
import auth from './modules/Auth/AuthReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  cart,
  items,
  order,
  auth,
});
