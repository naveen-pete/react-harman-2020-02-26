import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostForm from './PostForm';
import categoryService from '../services/CategoryService';

class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    const categories = categoryService.getAll();
    this.setState({ categories })
  }

  render() {
    const categories = this.state.categories;

    return (
      <div className="container">
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/posts" render={(props) => {
          return <Posts categories={categories} {...props} />
        }} />
        <Route path="/posts/new"
          render={(props) => <PostForm categories={categories} {...props} />}
        />
      </div>
    );
  }
}

export default App;
