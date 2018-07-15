import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REFRESH_CART = 'REFRESH_CART';

// Export Actions
export function addItemToCart(cart) {
  return {
    type: ADD_ITEM_TO_CART,
    cart,
  };
}

export function addItemToCartRequest(cusId, itemId) {
  return (dispatch) => {
    return callApi('addtocart', 'post', {
      cart: {
        cusId: cusId,
        itemId: itemId,
      },
    }).then(res => dispatch(addItemToCart(res.cart)));
  };
}

export function refreshCart(cart) {
  return {
    type: REFRESH_CART,
    cart,
  };
}

export function fetchCart(cusId) {
  return (dispatch) => {
    return callApi('cart/${cusId}').then(res => {
      dispatch(refreshCart(res.cart));
    });
  };
}
