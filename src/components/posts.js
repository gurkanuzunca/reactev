import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

import Post  from './post';
import NewPost  from './newPost';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <React.Fragment>
        <NewPost />
        <div className="posts">
          {
            this.props.posts.map((post, i) => (
              <Post key={ i } post={ post } />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items
});


export default connect(mapStateToProps, { fetchPosts })(Posts);
