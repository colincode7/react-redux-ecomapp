import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_ITEMS = 'ADD_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';


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


export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id,
  };
}

export function deleteItemRequest(id) {
  return (dispatch) => {
    return callApi(`items/${id}`, 'delete').then(() => dispatch(deleteItem(id)));
  };
}
