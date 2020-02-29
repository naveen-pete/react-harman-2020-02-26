import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import postService from '../services/PostService';
import { initCreatePost } from '../actions/posts';

class PostFormCreate extends Component {
  handleSubmit = async post => {
    this.props.createPost(post);
    this.props.history.push('/posts');
    // try {
    //   delete post.id;
    //   await postService.create(post);
    //   this.props.history.push('/posts');
    // } catch (e) {
    //   console.log('Create post failed.');
    //   console.log('Error:', e);
    // }
  }

  render() {
    return <PostForm
      categories={this.props.categories}
      operation="Create"
      onSubmit={this.handleSubmit}
    />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(initCreatePost(post))
  };
}

export default connect(null, mapDispatchToProps)(PostFormCreate);