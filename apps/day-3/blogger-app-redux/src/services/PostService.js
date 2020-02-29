import { posts } from '../data/store';
import { apiBaseUrl } from '../constants';

class PostService {
  // apiUrlPosts = `${apiBaseUrl}/posts`;
  apiUrlPosts = `${process.env.REACT_APP_API_BASE_URL}/posts`;

  getAll() {
    return fetch(this.apiUrlPosts)
      .then(response => response.json());
  }

  get(id) {
    return fetch(`${this.apiUrlPosts}/${id}`)
      .then(response => response.json());
  }

  create(post) {
    return fetch(this.apiUrlPosts, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  update(post) {
    return fetch(`${this.apiUrlPosts}/${post.id}`, {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  delete(id) {
    const index = posts.findIndex(p => p.id === id);
    posts.splice(index, 1);
  }
}

export default new PostService();
