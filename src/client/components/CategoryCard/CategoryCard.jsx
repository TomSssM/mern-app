import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ id, name, image, position: [posY, posX] = [] }) => (
  <Link className="CategoryCard" to={`/category/${id}`}>
    <span className="CategoryCard-ImageContainer">
      <span
        className="CategoryCard-Image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPositionX: posX,
          backgroundPositionY: posY,
        }}
      />
      <div className="CategoryCard-Paranja" />
    </span>
    <span className="CategoryCard-Name">{name}</span>
  </Link>
);

export default CategoryCard;
