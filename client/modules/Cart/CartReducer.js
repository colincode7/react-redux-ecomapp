import { REFRESH_CART, ADD_ITEM_TO_CART} from './CartActions';

// Initial State
const initialState = { data: {cusId: null, itemIds: []} };

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART :
      return { ...state, data: action.cart };

    case REFRESH_CART:
      return  { ...state, data: action.cart };

    case 'SET_CUSID':
      return { ...state, data: {...state.data, cusId: action.cusId}};

    default:
      return state;
  }
};

/* Selectors */

// Get cart items from state.
export const getCartItems = state => {
  if(!state.cart.data){
    return [];
  }
  let cartItemIds = state.cart.data.itemIds;

  // Get Full items for Cart item ids from state.items.data.
  return state.items.data.filter(item => cartItemIds.indexOf(item.id) != -1);
}



// Export Reducer
export default CartReducer;
