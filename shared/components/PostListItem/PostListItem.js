/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

function PostListItem(props, context) {
  return (
     <div className="single-post">
        <h3 className="post-title ">
          <Link to={'/post/' + props.post.slug} onClick={props.onClick}>
            {props.post.title}
          </Link>
        </h3>
      <p className="author-name">By {props.post.name}</p>
      <p className="post-desc">{props.post.content}</p>
      <hr className="divider"/>
     </div>
   );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
};

export default PostListItem;
