import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui inverted large menu">
      <span className="item">Electronic Store</span>
      <Link className="item" to="/">
        Home
      </Link>
      <div className="right item">
        <i className="large cart icon" />
        <div className="ui icon input">
          <input type="text" placeholder="Search..." />
          <i className="search icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
