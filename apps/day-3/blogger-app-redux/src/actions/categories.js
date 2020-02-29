import { CategoryAction } from '../constants';

export const selectCategory = category => {
  return {
    type: CategoryAction.SELECT_CATEGORY,
    payload: category
  };
};
