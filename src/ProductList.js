import React, { Component } from 'react';

import store from './store';

class ProductList extends Component {
  handleClick(id) {
    console.log(this.props);
    this.props.history.push('/products/' + id);
  }

  render() {
    return store.getState().products.map((product, idx) => (
      <div className="ui centered cards" key={idx}>
        <div
          className="ui raised link card"
          onClick={() => this.handleClick(product.id)}
        >
          <div className="ui centered small images">
            <img alt={product.title} src={product.img} />
          </div>
          <div className="content">
            <div className="center aligned header">{product.title}</div>
            <div className="meta">{product.category.toUpperCase()}</div>
          </div>
          <div
            className="extra content"
            onClick={() => {
              console.log('hit');
            }}
          >
            <span className="right floated star">
              <i className="star icon" />
              Favorite
            </span>
            <span className="floated star">
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
