import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Categories from './Categories';
import { categoryAll } from '../constants';
import postService from '../services/PostService';
import { getPosts } from '../actions/posts';

import { posts } from '../data/store';



class Posts extends Component {
  constructor() {
    super();

    this.state = {
      // posts: [],
      // selectedCategory: categoryAll
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
  }

  handleCategorySelect(selectedCategory) {
    this.setState({ selectedCategory });
  }

  handlePostDelete(id) {
    if (window.confirm('Are you sure?')) {
      this.setState((currentState) => {
        const updatedPosts = currentState.posts.filter(p => p.id !== id);
        return {
          posts: updatedPosts
        };
      });
    }
  }

  async componentDidMount() {
    this.props.getPosts();
    // try {
    //   const posts = await postService.getAll();
    //   this.setState({ posts });
    // } catch (e) {
    //   console.log('Get posts failed.');
    //   console.log('Error:', e);
    // }
  }

  componentWillUnmount() {
    console.log('Posts.componentWillUnmount() invoked.');
  }

  renderPosts(posts) {
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(p => <tr key={p.id}>
            <td>{p.title}</td>
            <td>{p.author}</td>
            <td>{p.category}</td>
            <td>
              <div className="btn-group btn-group-sm">
                <Link className="btn btn-info" to={`/posts/${p.id}`} >View </Link>
                <Link className="btn btn-warning" to={`/posts/${p.id}/edit`}>Edit</Link>
                <a className="btn btn-danger" href="/">Delete</a>
              </div>
            </td>
          </tr>)}
        </tbody>
      </table>
    );
  }

  render() {
    const { categories, selectedCategory, posts } = this.props;
    // const selectedCategory = this.props.selectedCategory;
    // const posts = this.state.posts;

    const filteredPosts = selectedCategory.id !== 'all'
      ? posts.filter(p => p.category === selectedCategory.id)
      : posts;

    return (
      <div className="row">
        <div className="col-3">
          <Categories
            data={categories}
          // onCategorySelect={this.handleCategorySelect}
          />
        </div>

        <div className="col">
          <h3>Posts</h3>
          <p>Selected Category: {selectedCategory.name}</p>

          {filteredPosts.length > 0
            ? this.renderPosts(filteredPosts)
            : <div className="alert alert-info">No posts for selected category.</div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = appState => {
  return {
    posts: appState.posts,
    selectedCategory: appState.selectedCategory
  };
};

const mapDispatchProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Posts);
