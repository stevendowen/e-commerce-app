import React, { Component } from 'react';

import ProductList from './ProductList';

class App extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ products: myJson });
      });
  }

  render() {
    return (
      <div>
        <div className="ui inverted large menu">
          <span className="item">Electronic Store</span>
          <div className="right item">
            <i className="large floated left cart icon" />
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search icon" />
            </div>
          </div>
        </div>
        <div className="ui centered cards">
          <ProductList products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;
