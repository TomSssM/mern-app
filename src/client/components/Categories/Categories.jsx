import React from 'react';
import classNames from 'classnames';
import './Categories.scss';
import Card from '../Card';
import CardsContainer from '../CardsContainer';

export const CategoryCard = ({ id, name, className, ...props }) => (
  <Card
    className={classNames('CategoryCard', className)}
    {...props}
    to={`/category/${id}`}
    height={140}
    width={300}
  >
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
