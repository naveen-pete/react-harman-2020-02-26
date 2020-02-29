import { combineReducers } from 'redux';

import postsReducer from './posts';
import selectedCategoryReducer from './selectedCategory';

const rootReducer = combineReducers({
  posts: postsReducer,
  selectedCategory: selectedCategoryReducer
});

export default rootReducer;
