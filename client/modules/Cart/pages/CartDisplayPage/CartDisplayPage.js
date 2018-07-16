import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import CartList from '../../components/CartList';

// Import Actions
import { fetchCartRequest } from '../../CartActions';
import { deleteItemFromCartRequest } from '../../CartActions';

// Import Selectors
import { getCart, getCartItems } from '../../CartReducer';

class CartDisplayPage extends Component {
  componentDidMount() {
    // Fetch Cart Items.
    this.props.dispatch(fetchCartRequest("rishika"));
  }

  deleteItemFromCart = itemId => {
    this.props.dispatch(deleteItemFromCartRequest('rishika', itemId));
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
  dispatch: PropTypes.func,
};

CartDisplayPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(CartDisplayPage);
