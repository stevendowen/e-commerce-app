import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ProductList from './ProductList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="ui inverted large menu">
            <span className="item">Electronic Store</span>
            <Link className="item" to="/">
              Home
            </Link>
            <div className="right item">
              <i className="large floated left cart icon" />
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search icon" />
              </div>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={ProductList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
