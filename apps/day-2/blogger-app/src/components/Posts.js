import React from 'react';

import PostDetail from './PostDetail';
import { posts } from '../data/store';

const Posts = () => {
  return <div>
    <h3>Posts</h3>

    {posts.map(p => <PostDetail key={p.id} post={p} />)}

  </div>;
};

export default Posts;
