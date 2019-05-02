import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
