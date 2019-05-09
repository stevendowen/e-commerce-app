import React, { Component } from 'react';

import store from './store';

class Search extends Component {
  state = {
    value: '',
  };

  saveChange = e => {
    e.preventDefault();
    store.dispatch({
      type: 'SEARCH',
      value: this.state.value,
    });
  };
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <div className="ui icon input">
        <form onSubmit={this.saveChange}>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <i className="search icon" />
        </form>
      </div>
    );
  }
}

export default Search;
