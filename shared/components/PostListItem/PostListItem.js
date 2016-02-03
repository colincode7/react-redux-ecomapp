/* eslint no-unused-vars: 0 */
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

// function PostListItem(props, context) {
//   return (
//       <div>
//         <span>Name: {props.post.name}</span>
//         <Link to={'/' + props.post.title}> <span>Title: {props.post.title}</span> </Link>
//         <span>Content: {props.post.content}</span>
//       </div>
//     );
// }


class PostListItem extends Component {
 constructor(props, context) {
   super(props, context);
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick(e) {
   this.props.onClick(this.props.post.title);
 }

 render() {
   return (
      <div>
        <span>Name: {this.props.post.name}</span>
        <Link to={'/' + this.props.post.title} onClick={this.handleClick}> <span>Title: {this.props.post.title}</span></Link>
        <span>Content: {this.props.post.content}</span>
      </div>
    );
 }
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
