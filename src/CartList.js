import React, { Component } from 'react';

import store from './store';
import Counter from './Counter';

class CartList extends Component {
  state = {
    price: [],
    total: 0,
  };

  componentDidMount() {
    this.setState({
      price: store.getState().cart.map(prod => prod.price),
    });
  }

  removeProduct(idx) {
    store.dispatch({
      type: 'REMOVE_PRODUCT',
      index: idx,
    });
    this.setState({
      price: [
        ...this.state.price.slice(0, idx),
        ...this.state.price.slice(idx + 1, this.state.price.length),
      ],
    });
  }

  showTotal() {
    return this.setState({
      total: this.state.price.reduce((a, b) => a + b),
    });
  }

  renderMessage() {
    if (store.getState().cart.length === 0) {
      return (
        <h2 className="ui center aligned container">Your Cart is Empty</h2>
      );
    } else {
      return (
        <div>
          {this.renderCart()}
          <div style={{ position: 'absolute', right: '20px' }}>
            <button onClick={() => this.showTotal()}>Update</button>
            Cart Total: ${this.state.total}
          </div>
        </div>
      );
    }
  }

  renderCart() {
    return store.getState().cart.map((prod, idx) => {
      return (
        <div
          key={idx}
          className="ui raised container segment"
          style={{ display: 'flex', position: 'relative' }}
        >
          <img style={{ maxHeight: '100px' }} alt={prod.title} src={prod.img} />
          <div style={{ display: 'block', marginLeft: '10px' }}>
            <h4>{prod.title}</h4>
            <h4>Price: ${prod.price}</h4>
            <button onClick={() => this.removeProduct(idx)}>
              <i className="x icon" />
              Remove
            </button>
          </div>
          <Counter />
          <div style={{ position: 'absolute', bottom: '0', right: '20px' }}>
            Total:
            <div>${prod.price * store.getState().counter}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui raised very padded container segment">
        <h3 style={{ textDecoration: 'underline' }}>Shopping Cart</h3>
        {this.renderMessage()}
      </div>
    );
  }
}

export default CartList;
