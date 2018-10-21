import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h3>{ this.props.post.title }</h3>
        <p>{ this.props.post.body }</p>
      </div>
    );
  }
}

export default Post;
