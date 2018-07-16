import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
// import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './PlaceOrderPage.css';

// Import Actions
import { createOrderRequest } from '../../OrderActions.js';

export class PlaceOrderPage extends Component {
  createOrder = () => {
    const nameRef = this.refs.username;
    const addOneRef = this.refs.address1;
    const addTwoRef = this.refs.address2;
    const cityRef = this.refs.city;
    const stateRef = this.refs.state;
    const zipRef = this.refs.zip;
    const paymentRef = this.refs.payment;
    if (nameRef.value && addOneRef.value && addTwoRef.value && cityRef.value && stateRef.value
    && zipRef.value && paymentRef.value) {
      let address = addOneRef.value + "\n" +
                    addTwoRef.value + "\n" +
                    cityRef.value + "\n" +
                    stateRef.value + "\n" +
                    zipRef.value;
      console.log(nameRef.value + address + paymentRef.value);
      this.props.createOrder(
        nameRef.value, address, paymentRef.value);
      nameRef.value = addOneRef.value = addTwoRef.value = cityRef.value = stateRef.value = zipRef.value = '';
      browserHistory.push('/ordersuccessful');
    }
  };

  render() {
    return (
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Place Order</h2>
          <input placeholder="Full Name" className={styles['form-field']} ref="username" />
          <input placeholder="Address Line 1" className={styles['form-field']} ref="address1" />
          <input placeholder="Address Line 2" className={styles['form-field']} ref="address2" />
          <input placeholder="City" className={styles['form-field']} ref="city" />
          <input placeholder="State" className={styles['form-field']} ref="state" />
          <input placeholder="Zip Code" className={styles['form-field']} ref="zip" />
          <input type = "radio" id="COD" ref="payment" value="COD" checked readOnly />
          <label>Cash On Delivery</label>
          <a className={styles['order-submit-button']} href="#" onClick={this.createOrder}>Place Order</a>
        </div>
    );
  }
}

// Retrieve data from store as props
function mapDispatchToProps(dispatch) {
  return {
     createOrder: (name, address, payment) => {dispatch(createOrderRequest(name, address, payment))}
  };
}

PlaceOrderPage.propTypes =  {
  createOrder: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PlaceOrderPage);
