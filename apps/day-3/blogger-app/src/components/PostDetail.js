import React from 'react';

const PostDetail = (props) => {
  const post = props.post;
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
        <button className="btn btn-sm btn-outline-primary mr-1" type="button">Edit</button>
        <button
          className="btn btn-sm btn-outline-danger"
          type="button"
          onClick={() => props.onPostDelete(post.id)}
        >Delete</button>
      </div>
    </div>);
};

export default PostDetail;
