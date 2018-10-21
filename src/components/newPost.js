import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPost } from '../actions/postAction';

class NewPost extends Component {
  state = {
    title: '',
    body: ''
  };

  handleNewFormChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  onSubmit = (event) => {
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.newPost(post);
  };


  render() {
    return (
      <div className="new-post">
        <h1>New Post</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" className="form-control" id="title" placeholder="Title" value={  this.state.title } onChange={ this.handleNewFormChange } />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input type="text" name="body" className="form-control" id="body" placeholder="Body" value={ this.state.body } onChange={ this.handleNewFormChange } />
        </div>
        <button className="btn btn-default" onClick={ this.onSubmit }>Submit</button>
      </div>
    );
  }
}

export default connect(null, { newPost })(NewPost);
