import { ORDER_SUCCESS } from './OrderActions';

// Initial State
const initialState = {
  successOrderId: '' };

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_SUCCESS :
      return {
        successOrderId: action.orderId,
      };

    default:
      return state;
  }
};

export const getOrderId = state => state.order.successOrderId;

// Export Reducer
export default OrderReducer;
