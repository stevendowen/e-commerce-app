import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    console.log(this.props);
    return <div>{this.props.match.params.id}</div>;
  }
}

export default ProductDetail;
