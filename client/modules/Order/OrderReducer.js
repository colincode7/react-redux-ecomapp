import { REFRESH_CART, ADD_ITEM_TO_CART} from './OrderActions';

// Initial State
const initialState = { data: {cusId: "rishika", itemIds: []} };

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART :
      return { ...state, data: action.cart };

    case REFRESH_CART:
      return  { ...state, data: action.cart };

    default:
      return state;
  }
};

/* Selectors */

// // Get all posts
// export const getCart = state => {
//   console.log(state);
//   return state.items.cart;
// }
//
// // Get post by cuid
// export const getItem = (state, id) => state.items.data.filter(item => item.id === id)[0];


// Get cart items from state.
export const getCartItems = state => {
  if(!state.cart.data){
    return [];
  }
  let cartItems = state.cart.data.itemIds;

  return state.items.data.filter(item => cartItems.indexOf(item.id) != -1);
}



// Export Reducer
export default CartReducer;
