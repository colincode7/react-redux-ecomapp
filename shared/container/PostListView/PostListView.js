/* eslint no-unused-vars:0 */
import React, { PropTypes } from 'react';
import PostListItem from '../../components/PostListItem/PostListItem';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';

function PostListView(props, context) {
  return (<div className="listView">
          {props.posts.map((post, i, arr) =>
            (<PostListItem post={post} key={i}
              onClick={function handleClick() {
                props.dispatch(Actions.addSelectedPost(post));
              }}
            />))
          }
         </div>);
}

PostListView.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PostListView);
