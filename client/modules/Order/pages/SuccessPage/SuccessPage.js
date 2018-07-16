import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


// Import Actions
import { createOrderRequest } from '../../OrderActions.js';
// Import Selectors
import { getOrderId } from '../../OrderReducer.js';

export class SuccessPage extends Component {


  render() {
    return (
        <div>
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
