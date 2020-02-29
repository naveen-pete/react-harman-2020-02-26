import React, { Component } from 'react';

import postService from '../services/PostService';

class PostDetail extends Component {
  state = {
    post: null
  }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const post = await postService.get(id);
      this.setState({ post });
    } catch (e) {
      console.log('Get post failed.');
      console.log('Error:', e);
    }
  }

  handlePostDelete = async () => {
    if (window.confirm('Are you sure?')) {
      try {
        await postService.delete(this.state.post.id);
        this.props.history.push('/posts');
      }
      catch (e) {
        console.log('Delete post failed.');
        console.log('Error:', e);
      }
    }
  }

  render() {
    const { post } = this.state;
    const { history } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className="card bg-light mb-3">
        <div className="card-header">
          <h5>
            {post.title}
          </h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            {post.body}
          </p>
          <p className="card-text">Author: <em>
            {post.author}
          </em></p>
          <p className="card-text">Category: <em>
            {post.category}
          </em></p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-sm btn-outline-primary mr-1"
            type="button"
            onClick={() => history.push(`/posts/${post.id}/edit`)}
          >Edit</button>
          <button
            className="btn btn-sm btn-outline-danger mr-1"
            type="button"
            onClick={this.handlePostDelete}
          >Delete</button>
          <button
            className="btn btn-sm btn-outline-info"
            type="button"
            onClick={() => history.goBack()}
          >Back</button>
        </div>
      </div>
    );
  }
}

export default PostDetail;
