import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from './store';

class Header extends Component {
  renderWishlist() {
    if (store.getState().list.length > 0) {
      return (
        <i className="icons">
          <i className="large shopping bag icon" />
          <i
            className="red heart icon"
            style={{ paddingRight: '20px', paddingTop: '3px' }}
          />
        </i>
      );
    } else {
      return (
        <i className="icons">
          <i className="large shopping bag icon" />
          <i
            className="red heart outline icon"
            style={{ paddingRight: '20px', paddingTop: '3px' }}
          />
        </i>
      );
    }
  }
  renderShoppingCart() {
    if (store.getState().cart.length > 0) {
      return (
        <i className="icons">
          <i className="large cart icon" />
          <i className="top right corner red circle icon" />
        </i>
      );
    } else {
      return <i className="large cart icon" />;
    }
  }

  render() {
    return (
      <div className="ui inverted large menu">
        <span className="item">Electronic Store</span>
        <Link className="item" to="/">
          <i className="home icon" />
          Home
        </Link>
        <div className="right item">
          <Link style={{ marginRight: '10px' }} to="/wishList">
            {this.renderWishlist()}
          </Link>
          <Link style={{ marginRight: '10px' }} to="/cartList">
            {this.renderShoppingCart()}
          </Link>
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
