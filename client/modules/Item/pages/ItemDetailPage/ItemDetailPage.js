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

export function ItemDetailPage(props) {
  return (
    <div>
      <Helmet title={props.item.name} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.item.price}</h3>
        <p className={styles['post-desc']}>{props.item.description}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
ItemDetailPage.need = [params => {
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
