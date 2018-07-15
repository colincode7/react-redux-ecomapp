import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Item.css';

function Item(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to = {`/items/${props.item.id}`}>
          {props.item.name}
        </Link>
      </h3>
      <p className={styles['author-name']}><span>Price: </span> ${props.item.price}.00</p>
      <p className={styles['post-desc']}>{props.item.img}</p>
      <p className={styles['post-desc']}>{props.item.description}</p>
      <p className={styles['post-action']}><a href="#" onClick={props.addItemToCart}><span>Add to cart</span></a></p>
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
};

export default Item;
