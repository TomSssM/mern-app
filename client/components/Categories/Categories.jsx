import React from 'react';
import classNames from 'classnames';
import './Categories.scss';
import Card from '../Card';
import CardsContainer from '../CardsContainer';

export const CategoryCard = ({ id, name, className, ...rest }) => (
  <Card
    className={classNames('CategoryCard', className)}
    {...rest}
    to={`/category/${id}`}
    height={140}
    width={300}
  >
    <span className="CategoryCard-Name">{name}</span>
  </Card>
);

const Categories = ({ categories, ...rest }) => (
  <CardsContainer {...rest}>
    {categories?.map(props => (
      <CategoryCard key={props.id} {...props} />
    ))}
  </CardsContainer>
);

export default Categories;
