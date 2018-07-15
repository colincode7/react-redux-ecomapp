import { ADD_ITEM, ADD_ITEMS, DELETE_ITEM } from './ItemActions';

// Initial State
const initialState = {
  data: [] };

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM :
      return {
        data: [action.item, ...state.data],
      };

    case ADD_ITEMS :
      return {
        data: action.items,
      };

    case DELETE_ITEM :
      return {
        data: state.data.filter(item => item.id !== action.id),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getItems = state => state.items.data;

// Get post by cuid
export const getItem = (state, id) => state.items.data.filter(item => item.id === id)[0];

// Export Reducer
export default ItemReducer;
