import { apiBaseUrl } from '../constants';

class CategoryService {
  apiUrlCategories = `${apiBaseUrl}/categories`;

  getAll() {
    return fetch(this.apiUrlCategories)
      .then(response => response.json());
  }
}

const instance = new CategoryService();
export default instance;
