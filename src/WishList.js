import React, { Component } from 'react';

import store from './store';

class WishList extends Component {
  renderMessage() {
    if (store.getState().list.length === 0) {
      return (
        <h2 className="ui center aligned container">
          There is No Wish's on Your List
        </h2>
      );
    } else {
      return this.renderCart();
    }
  }

  renderCart() {
    return store.getState().list.map((prod, idx) => {
      return (
        <div
          key={idx}
          className="ui raised very padded container segment"
          style={{ display: 'flex' }}
        >
          <img style={{ maxHeight: '100px' }} alt={prod.title} src={prod.img} />
          <h4>{prod.title}</h4>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui raised very padded container segment">
        <h3>Wish List</h3>
        <div>{this.renderMessage()}</div>
      </div>
    );
  }
}

export default WishList;
