import React, { Component } from 'react';

import store from './store';

class WishList extends Component {
  addProduct(product) {
    store.dispatch({
      type: 'ADD_PRODUCT',
      product: product,
    });
  }

  removeWish(index) {
    store.dispatch({
      type: 'REMOVE_WISH',
      index: index,
    });
  }

  renderMessage() {
    if (store.getState().list.length === 0) {
      return (
        <h2 className="ui center aligned container">
          There is No Wish's on Your List
        </h2>
      );
    } else {
      return this.renderWishList();
    }
  }

  renderWishList() {
    return store.getState().list.map((prod, idx) => {
      return (
        <div
          key={idx}
          className="ui raised container segment"
          style={{ display: 'flex' }}
        >
          <img style={{ maxHeight: '100px' }} alt={prod.title} src={prod.img} />
          <div style={{ display: 'block', marginLeft: '10px' }}>
            <h4>{prod.title}</h4>
            <h4>Price: ${prod.price}</h4>
            <button onClick={() => this.addProduct(prod)}>
              <i className="cart plus icon" />
              Add To Cart
            </button>
            <button onClick={() => this.removeWish(idx)}>
              <i className="x icon" />
              Remove
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui raised very padded container segment">
        <h3 style={{ textDecoration: 'underline' }}>Wish List</h3>
        <div>{this.renderMessage()}</div>
      </div>
    );
  }
}

export default WishList;
