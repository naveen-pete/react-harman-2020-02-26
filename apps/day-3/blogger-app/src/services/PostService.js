import { posts } from '../data/store';

class PostService {
  getAll() {
    return posts;
  }

  get(id) {
    const post = posts.find(p => p.id === id);
    return post;
  }

  create(post) {
    post.id = Date.now();
    posts.push(post);
  }

  update(post) {
    const postToUpdate = posts.find(p => p.id === post.id);
    if (postToUpdate) {
      postToUpdate.title = post.title;
      postToUpdate.body = post.body;
      postToUpdate.author = post.author;
      postToUpdate.category = post.category;
    }
  }

  delete(id) {
    const index = posts.findIndex(p => p.id === id);
    posts.splice(index, 1);
  }
}

export default new PostService();
