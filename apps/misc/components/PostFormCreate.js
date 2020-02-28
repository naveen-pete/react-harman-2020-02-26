import React, { Component } from 'react';

import PostForm from './PostForm';
import postService from '../services/PostService';

class PostFormCreate extends Component {
  handleSubmit = post => {
    delete post.id;
    postService.create(post);
    this.props.history.push('/posts');
  }

  render() {
    return <PostForm
      operation="Create"
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormCreate;
