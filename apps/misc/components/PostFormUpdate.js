import React, { Component } from 'react';

import PostForm from './PostForm';
import postService from '../services/PostService';

class PostFormUpdate extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    const post = postService.get(id);
    this.setState({ post });
  }

  handleSubmit = post => {
    postService.update(post);
    this.props.history.push('/posts');
  }

  render() {
    return <PostForm
      operation="Update"
      post={this.state.post}
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormUpdate;
