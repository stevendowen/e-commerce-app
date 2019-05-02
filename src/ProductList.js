import React from 'react';

const ProductList = props => {
  return props.products.map((product, idx) => (
    <div className="ui raised link card" key={idx}>
      <div className="ui centered small images">
        <img alt={product.title} src={product.img} />
      </div>
      <div className="content">
        <div className="center aligned header">{product.title}</div>
        <div className="meta">{product.category.toUpperCase()}</div>
        <div className="center aligned description">{product.description}</div>
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
  ));
};

export default ProductList;
