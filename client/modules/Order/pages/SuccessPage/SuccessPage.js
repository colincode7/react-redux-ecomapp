import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Import Actions
import { createOrderRequest } from '../../OrderActions.js';
// Import Selectors
import { getOrderId } from '../../OrderReducer.js';

// Import Style
import styles from '../../../Cart/components/CartList.css';

export class SuccessPage extends Component {


  render() {
    return (
        <div>
          <Link className={styles['back-button']} to={'/'}>Back</Link>
          <br/><br/>
          <h2>Order Placed Successfully. Your order Id: {this.props.orderId}</h2>
        </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    orderId: getOrderId(state)
  };
}

SuccessPage.propTypes = {
    orderId: PropTypes.string
};


export default connect(mapStateToProps)(SuccessPage);
