import { CategoryAction, categoryAll } from '../constants';

const selectedCategoryReducer = (state = categoryAll, action) => {

  switch (action.type) {
    case CategoryAction.SELECT_CATEGORY:
      return { ...action.payload };

    default:
      return state;
  }

};

export default selectedCategoryReducer;
