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

  getTotal() {
    let total = 0;
    store.getState().cart.forEach(p => {
      total += p.qty * p.price;
    });
    return total.toFixed(2);
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
          <div
            style={{
              position: 'absolute',
              right: '20px',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            Cart Total: ${this.getTotal()}
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
          <Counter qty={prod.qty} id={prod.id} />
          <div style={{ position: 'absolute', bottom: '0', right: '20px' }}>
            Total: ${prod.price * store.getState().counter}
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
