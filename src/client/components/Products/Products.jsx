import React from 'react';
import './Products.css';

// todo: make dyamic
const data = [
  {
    id: 123,
    name: 'product 1',
    image:
      'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ',
  },
  {
    id: 456,
    name: 'product 2',
    image:
      'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ',
  },
  {
    id: 789,
    name: 'product 3',
    image:
      'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ',
  },
  {
    id: 112,
    name: 'product 3',
    image:
      'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ',
  },
];

const Product = ({ name, image }) => (
  <div className="product">
    <span
      className="product__image"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 50%, #ffffff), url(${image})`,
      }}
    />
    <span className="product__name">{name}</span>
  </div>
);

export const Products = () => (
  <div className="products">
    {data.map(({ id, name, image }) => (
      <Product key={id} name={name} image={image} />
    ))}
  </div>
);
