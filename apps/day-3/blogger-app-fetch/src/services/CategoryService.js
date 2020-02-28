import { categories } from '../data/store';

class CategoryService {
  getAll() {
    return categories;
  }
}

const instance = new CategoryService();
export default instance;
