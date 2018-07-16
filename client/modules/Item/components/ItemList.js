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
            addItemToCart={() => props.addItemToCart(item.id)}
            key={item._id}
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
  addItemToCart: PropTypes.func,
};

export default ItemList;
