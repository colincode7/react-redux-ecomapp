import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from './Item.css';

function Item(props) {
  let button;
  if(props.addItemToCart){
    button = (<p className={styles['item-action']}><a href="#" onClick={props.addItemToCart}><span>Add to cart</span></a></p>);
  }else{
    button = (<p className={styles['item-action']}><a href="#" onClick={props.deleteItemFromCart}><span>Delete</span></a></p>);
  }
  return (
    <div className={styles['single-item']}>
      <h3 className={styles['item-title']}>
        <Link to = {`/items/${props.item.id}`}>
          {props.item.name}
        </Link>
      </h3>
      <p className={styles['author-name']}><span>Price: </span> ${props.item.price}.00</p>
      <img src = {'images/' + props.item.img} alt = "Image not displayed" width = "300" height = "300"/>
      {button}
      <hr className={styles.divider} />
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    description: PropTypes.string,
  }),
  addItemToCart: PropTypes.func,
  deleteItemFromCart: PropTypes.func
};

export default Item;
