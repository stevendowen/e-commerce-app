import React, { Component } from 'react';

import store from './store';

class ProductList extends Component {
  handleClick(id) {
    this.props.history.push('/products/' + id);
  }

  render() {
    return store.getState().products.map((product, idx) => (
      <div className="ui centered cards" key={idx}>
        <div className="ui raised link card">
          <div className="ui centered small images">
            <img alt={product.title} src={product.img} />
          </div>
          <div className="content">
            <div className="center aligned header">{product.title}</div>
            <div className="meta">{product.category.toUpperCase()}</div>
            <button
              className="right floated ui blue mini button"
              onClick={() => this.handleClick(product.id)}
            >
              Details...
            </button>
          </div>
          <div className="extra content">
            <span
              className="right floated star"
              onClick={() => {
                console.log('favorite');
              }}
            >
              <i className="star icon" />
              Favorite
            </span>
            <span
              className="floated star"
              onClick={() => {
                console.log('add to cart');
              }}
            >
              <i className="cart icon" />
              Add To Cart
            </span>
          </div>
        </div>
      </div>
    ));
  }
}

export default ProductList;
