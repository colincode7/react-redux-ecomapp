import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_ITEMS = 'ADD_ITEMS';


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
