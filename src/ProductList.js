import React, { Component } from 'react';

class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ products: myJson });
      });
  }

  render() {
    return this.state.products.map((product, idx) => (
      <div className="ui centered cards">
        <div className="ui raised link card" key={idx}>
          <div className="ui centered small images">
            <img alt={product.title} src={product.img} />
          </div>
          <div className="content">
            <div className="center aligned header">{product.title}</div>
            <div className="meta">{product.category.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span className="right floated star">
              <i className="star icon" />
              Favorite
            </span>
            <span className="floated star">
              <i className="cart icon" />
              Add To Cart
            </span>
          </div>
        </div>
      </div>
    ));
  }
}

export default ProductList;
