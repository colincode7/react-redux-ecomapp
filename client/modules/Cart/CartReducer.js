import { REFRESH_CART, ADD_ITEM_TO_CART} from './CartActions';

// Initial State
const initialState = { cart: {cusId: undefined, itemIds: []} };

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART :
      return {
        cart: action.cart,
      };

    case REFRESH_CART:
      return {
        cart: action.cart,
      }

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

// Export Reducer
export default CartReducer;
