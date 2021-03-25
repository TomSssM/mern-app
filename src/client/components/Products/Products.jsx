import React from 'react';
import './Products.css';

// todo: make dyamic
const data = [
  {
    id: 123,
    name: 'Жесткие диски',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Laptop-hard-drive-exposed.jpg/1200px-Laptop-hard-drive-exposed.jpg',
  },
  {
    id: 456,
    name: 'Мониторы',
    image:
      'https://i2.rozetka.ua/goods/10437496/acer_um_qw0ee_001_images_10437496778.jpg',
  },
  {
    id: 789,
    name: 'Клавиатуры',
    image: 'https://img.moyo.ua/img/products/4527/90_1500.jpg?1602514003',
  },
  {
    id: 112,
    name: 'Кабеля',
    position: ['top', 'left'],
    image:
      'https://api.kramatorskpost.com/storage/article-images/wp-content/31271/-655x430.jpg',
  },
];

const Product = ({ name, image, position = [] }) => {
  const [backgroundPositionY, backgroundPositionX] = position;
  return (
    <div className="product">
      <div
        className="product__image"
        style={{
          // todo: replace to CSS variable
          backgroundImage: `linear-gradient(to bottom, transparent 50%, #ffffff), url(${image})`,
          backgroundPositionX,
          backgroundPositionY,
        }}
      />
      <span className="product__name">{name}</span>
    </div>
  );
};

const Products = () => (
  <div className="products">
    {data.map(({ id, ...productProps }) => (
      <Product key={id} {...productProps} />
    ))}
  </div>
);

export default Products;
