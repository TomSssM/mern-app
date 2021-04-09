import React from 'react';
import './Products.scss';
import data from './data';

const Product = ({ name, image, position: [posY, posX] = [] }) => (
  <div className="Product">
    <div className="Product-ImageContainer">
      <div
        className="Product-Image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPositionX: posX,
          backgroundPositionY: posY,
        }}
      />
      <div className="Product-Paranja" />
    </div>
    <span className="Product-Name">{name}</span>
  </div>
);

const Products = () => (
  <div className="Products">
    {data.map(({ id, ...productProps }) => (
      <Product key={id} {...productProps} />
    ))}
  </div>
);

export default Products;
