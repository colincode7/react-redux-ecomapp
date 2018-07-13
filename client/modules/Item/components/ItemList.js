import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import Item from './Item/Item';

function ItemList(props) {
  return (
    <div className="listView">
      {
        props.items.map(item => (
          <Item
            item={item}
            id={item.id}
          />
        ))
      }
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    description: PropTypes.string,
  })),
  handleDeleteItem: PropTypes.func,
};

export default ItemList;
