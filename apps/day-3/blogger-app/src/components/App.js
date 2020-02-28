import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostFormCreate from './PostFormCreate';
import PostFormUpdate from './PostFormUpdate';
import PostDetail from './PostDetail';

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

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" render={(props) => {
            return <Posts categories={categories} {...props} />
          }} />
          <Route exact path="/posts/new"
            render={(props) => <PostFormCreate categories={categories} {...props} />}
          />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route exact path="/posts/:id/edit"
            render={(props) => <PostFormUpdate categories={categories} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

// http://localhost:3000/posts/1
// http://localhost:3000/posts/new
