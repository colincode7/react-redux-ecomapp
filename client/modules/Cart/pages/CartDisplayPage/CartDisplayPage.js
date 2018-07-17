import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Import Components
import CartList from '../../components/CartList';

// Import Actions
import { fetchCartRequest } from '../../CartActions';
import { deleteItemFromCartRequest } from '../../CartActions';
import { fetchItems } from '../../../Item/ItemActions';

// Import Selectors
import { getCart, getCartItems } from '../../CartReducer';

class CartDisplayPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItems());
    let token = localStorage.getItem('jwtToken');
    console.log('token:' + token);
    if(!token || !this.props.cusId) {
      browserHistory.push('/login');
    }
    // Fetch Cart Items.
    this.props.dispatch(fetchCartRequest(this.props.cusId));
  }

  deleteItemFromCart = itemId => {
    this.props.dispatch(deleteItemFromCartRequest(this.props.cusId, itemId));
  };


  render() {
    return (
      <div>
        <CartList
          deleteItemFromCart={this.deleteItemFromCart}
          items={this.props.items}
        />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
CartDisplayPage.need = [() => { return fetchItems(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    items: getCartItems(state),
    cusId: state.auth.cusId,
  };
}

CartDisplayPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    description: PropTypes.string,
  })),
  cusId: PropTypes.string,
  dispatch: PropTypes.func,
};

CartDisplayPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(CartDisplayPage);
