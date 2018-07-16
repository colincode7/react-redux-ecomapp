import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/Item/Item.css';

// Import Actions
import { fetchItem } from '../../ItemActions';

// Import Selectors
import { getItem } from '../../ItemReducer';

import { Link } from 'react-router';

export function ItemDetailPage(props) {
  return (
    <div>
      <Link className={styles['back-button']} to={'/'}>Back</Link>
      <br/><br/><br/><br/>
      <h1>{props.item.name}</h1><br/>
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <img src = {'../images/' + props.item.img} alt = "Image not displayed" width = "300" height = "300"/>
        <h3 className={styles['post-title']}>${props.item.price}.00</h3><br/>
        <p className={styles['post-desc']}>{props.item.description}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
ItemDetailPage.need = [params => {
  console.log(params.id);
  return fetchItem(params.id);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    item: getItem(state, props.params.id),
  };
}

ItemDetailPage.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(ItemDetailPage);
