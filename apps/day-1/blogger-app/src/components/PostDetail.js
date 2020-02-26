import React from 'react';

const PostDetail = (props) => {
  const post = props.post;
  return (
    <div>
      <div>
        Title: {post.title}
      </div>
      <div>
        Body: {post.body}
      </div>
      <div>
        Author: {post.author}
      </div>
      <div>
        Category: {post.category}
      </div>
      <hr />
    </div>
  );
};

export default PostDetail;
