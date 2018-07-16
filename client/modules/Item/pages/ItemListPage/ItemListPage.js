import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import ItemList from '../../components/ItemList';
// import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { fetchItems } from '../../ItemActions';
import { addItemToCartRequest } from '../../../Cart/CartActions';
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
// import { getShowAddPost } from '../../../App/AppReducer';
import { getItems } from '../../ItemReducer';
import { getCart } from '../../../Cart/CartReducer';

class ItemListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  addItemToCart = itemId => {
    this.props.dispatch(addItemToCartRequest('rishika', itemId));
  };
  //
  // handleAddPost = (name, title, content) => {
  //   this.props.dispatch(toggleAddPost());
  //   this.props.dispatch(addPostRequest({ name, title, content }));
  // };

  render() {
    return (
      <div>
  {/*     <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} /> */}

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
};

ItemListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(ItemListPage);
