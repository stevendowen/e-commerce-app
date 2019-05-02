import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        store.dispatch({ type: 'SET_PRODUCT', products: myJson });
      });
  }
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
