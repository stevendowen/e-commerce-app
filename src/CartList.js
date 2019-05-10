import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from './store';
import Counter from './Counter';

class CartList extends Component {
  removeProduct(idx) {
    store.dispatch({
      type: 'REMOVE_PRODUCT',
      index: idx,
    });
  }

  getTotal() {
    let total = 0;
    store.getState().cart.forEach(p => {
      total += p.qty * p.price;
    });
    return total.toFixed(2);
  }

  emptyCart(product) {
    store.dispatch({
      type: 'EMPTY_CART',
      product: product,
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
          <div
            style={{
              position: 'absolute',
              right: '20px',
              bottom: '10px',
              display: 'flex',
            }}
          >
            <Link to="/checkout">
              <button
                className="ui green small button"
                style={{ marginRight: '5px' }}
                onClick={() => this.emptyCart()}
              >
                <i className="credit card icon" />
                Checkout
              </button>
            </Link>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '1.28571429rem',
                marginTop: '7px',
              }}
            >
              Cart Total: ${this.getTotal()}
            </div>
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
