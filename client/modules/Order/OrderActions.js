import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

// Export Actions
export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function addItemToCartRequest(cusId, itemId) {
  // return (dispatch) => {
  //   return callApi('addtocart', 'post', {
  //     item: {
  //       cusId: cusId,
  //       price: itemId,
  //     },
  //   }).then(res => dispatch(addItem(res.item)));
  // };
}

export function addItems(items) {
  return {
    type: ADD_ITEMS,
    items,
  };
}

export function fetchItems() {
  return (dispatch) => {
    return callApi('items').then(res => {
      dispatch(addItems(res.items));
    });
  };
}

export function fetchItem(id) {
  return (dispatch) => {
    return callApi(`items/${id}`).then(res => dispatch(addItem(res.item)));
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id,
  };
}

export function createOrderRequest(name, address, payOption) {
  console.log("my" + name + address + payOption);
  return (dispatch) => {
    return callApi('createorder', 'post', {
      order: {
        cusId: 'rishika',
        name: name,
        payOption: payOption,
        address: address,
      },
    }).then(res => dispatch(orderSuccessful(res.order)));
  };
}
