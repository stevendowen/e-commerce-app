import React, { Component } from 'react';

import store from './store';

class ProductList extends Component {
  handleClick(id) {
    this.props.history.push('/products/' + id);
  }

  addProduct(product) {
    store.dispatch({
      type: 'ADD_PRODUCT',
      product: product,
    });
  }

  addWish(product) {
    store.dispatch({
      type: 'ADD_WISH',
      product: product,
    });
  }

  render() {
    console.log(store.getState());
    let products = store.getState().products;
    let search = store.getState().search;
    if (search !== '') {
      products = products.filter(p => p.category === search);
    }
    return products.map((product, idx) => (
      <div className="ui raised link card" key={idx}>
        <div className="ui centered images">
          <img
            style={{ maxHeight: '175px' }}
            alt={product.title}
            src={product.img}
          />
        </div>
        <div className="content">
          <div className="center aligned header">{product.title}</div>
          <div className="meta">{product.category}</div>
          <button
            className="right floated ui blue mini button"
            onClick={() => this.handleClick(product.id)}
          >
            Details...
          </button>
        </div>
        <div className="extra content">
          <button
            className="right floated star"
            onClick={() => this.addWish(product)}
          >
            <i className="heart icon" />
            Add To Wish List
          </button>
          <button
            className="floated cart"
            onClick={() => this.addProduct(product)}
          >
            <i className="cart plus icon" />
            Add To Cart
          </button>
        </div>
      </div>
    ));
  }
}

export default ProductList;
