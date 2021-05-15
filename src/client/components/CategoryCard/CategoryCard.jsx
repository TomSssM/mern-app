import React from 'react';
import './CategoryCard.scss';
import Card from '../Card';
import Shade from '../Shade';

const CategoryCard = ({ id, name, image, position: [posY, posX] = [] }) => (
  <Card className="CategoryCard" to={`/category/${id}`}>
    <Shade className="CategoryCard-Shade">
      <div
        className="CategoryCard-Image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPositionX: posX,
          backgroundPositionY: posY,
        }}
      />
    </Shade>
    <span className="CategoryCard-Name">{name}</span>
  </Card>
);

export default CategoryCard;
