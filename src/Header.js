import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from './store';
import Search from './Search';

class Header extends Component {
  renderWishIcon() {
    if (store.getState().list.length === 0) {
      return (
        <i className="icons">
          <i className="large shopping bag icon" />
          <i
            className="red heart outline icon"
            style={{ paddingRight: '20px', paddingTop: '4px' }}
          />
        </i>
      );
    } else {
      return (
        <i className="icons">
          <i className="large shopping bag icon" />
          <i
            className="red heart icon"
            style={{ paddingRight: '20px', paddingTop: '4px' }}
          />
        </i>
      );
    }
  }

  renderCartIcon() {
    if (store.getState().cart.length === 0) {
      return <i className="large cart icon" />;
    } else {
      return (
        <i className="icons">
          <i className="large cart icon" />
          <i className="top right corner red circle icon" />
        </i>
      );
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
            {this.renderWishIcon()}
          </Link>
          <Link style={{ marginRight: '10px' }} to="/cartList">
            {this.renderCartIcon()}
          </Link>
          <Search />
        </div>
      </div>
    );
  }
}

export default Header;
