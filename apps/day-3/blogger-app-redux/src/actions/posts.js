import { PostAction } from '../constants';
import postService from '../services/PostService'

export const getPosts = () => {
  return (dispatch) => {
    postService.getAll()
      .then(posts => {
        dispatch(setPosts(posts));
      }).catch(e => {
        console.log('Get posts failed.');
        console.log('Error:', e);
      });
  };
}

export const setPosts = posts => {
  return {
    type: PostAction.SET_POSTS,
    payload: posts
  };
};

export const initCreatePost = post => {
  return (dispatch) => {
    postService.create(post)
      .then(newPost => {
        dispatch(createPost(newPost));
      }).catch(e => {
        console.log('Create post failed.');
        console.log('Error:', e);
      });
  };
}

export const createPost = post => {
  return {
    type: PostAction.CREATE_POST,
    payload: post
  };
};
