import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Components
import Item from '../../Item/components/Item/Item.js';

// Import Style
import styles from './CartList.css';

function CartList(props) {
  if(props.items.length == 0){
    return (
      <div>
        <Link className={styles['back-button']} to={'/'}>Back</Link>
        <br/><br/><br/><br/>
        <div>Your cart is empty!</div>
      </div>
    );
  }
  return (
    <div>
      <Link className={styles['back-button']} to={'/'}>Back</Link>
      <br/><br/>
      <div className="listView">
        {
          props.items.map(item => (
            <Item
              item={item}
              deleteItemFromCart={() => props.deleteItemFromCart(item.id)}
            />
          ))
        }
        <Link className={styles['back-button']} to={'/'}>Checkout</Link>

      </div>
    </div>
  );
}

CartList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    description: PropTypes.string,
  })),
  deleteItemFromCart: PropTypes.func,
};

export default CartList;
