import React, { Component } from 'react';

import store from './store';

class Search extends Component {
  handleChange(e) {
    store.dispatch({
      type: 'SEARCH',
      value: e.target.value,
    });
  }
  render() {
    return (
      <div className="ui icon input">
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <i className="search icon" />
      </div>
    );
  }
}

export default Search;
