import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Item.css';

function Item(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link>
          {props.item.name}
        </Link>
      </h3>
      <p className={styles['author-name']}><span>Price: </span> {props.item.price}</p>
      <p className={styles['post-desc']}>{props.item.img}</p>
      <p className={styles['post-desc']}>{props.item.description}</p>
      <p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteItem" /></a></p>
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
  onDelete: PropTypes.func,
};

export default Item;
