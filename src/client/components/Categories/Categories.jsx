import React from 'react';
import classNames from 'classnames';
import './Categories.scss';
import Card from '../Card';
import Shade from '../Shade';
import CardsContainer from '../CardsContainer';

// todo: Image component with shade that would consider the props from the "database"
export const CategoryCard = ({
  id,
  name,
  image,
  position: [posY, posX] = [],
  className,
}) => (
  <Card
    className={classNames('CategoryCard', className)}
    to={`/category/${id}`}
  >
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

const Categories = ({ categories, ...props }) => (
  <CardsContainer {...props}>
    {categories?.map(({ id, ...rest }) => (
      <CategoryCard key={id} id={id} {...rest} />
    ))}
  </CardsContainer>
);

export default Categories;
