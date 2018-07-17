import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Import Components
import ItemList from '../../components/ItemList';
// import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { fetchItems } from '../../ItemActions';
import { addItemToCartRequest } from '../../../Cart/CartActions';
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getItems } from '../../ItemReducer';
import { getCart } from '../../../Cart/CartReducer';

class ItemListPage extends Component {
  componentDidMount() {
    let token = localStorage.getItem('jwtToken');
    console.log('token:' + token);
    if(!token || !this.props.cusId) {
      browserHistory.push('/login');
    }
    this.props.dispatch(fetchItems());
  }

  addItemToCart = itemId => {
    this.props.dispatch(addItemToCartRequest(this.props.cusId, itemId));
  };


  render() {
    return (
      <div>
        <ItemList
          addItemToCart={this.addItemToCart}
          items={this.props.items}
        />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ItemListPage.need = [() => { return fetchItems(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    // showAddPost: getShowAddPost(state),
    items: getItems(state),
    cusId: state.auth.cusId,
  };
}

ItemListPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    description: PropTypes.string,
  })),
// showAddPost: PropTypes.bool,
  dispatch: PropTypes.func,
  cusId: PropTypes.string,
};

ItemListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(ItemListPage);
