import { PostAction } from '../constants';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case PostAction.SET_POSTS:
      return [...action.payload];

    case PostAction.CREATE_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default postsReducer;