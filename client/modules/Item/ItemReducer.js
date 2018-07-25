import { ADD_ITEMS } from './ItemActions';

// Initial State
const initialState = {
  data: [] };

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS :
      return {
        data: action.items,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all items
export const getItems = state => state.items.data;


// Export Reducer
export default ItemReducer;
