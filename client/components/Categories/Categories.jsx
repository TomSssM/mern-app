import React from 'react';
import classNames from 'classnames';
import './Categories.scss';
import Card from '../Card';
import CardsContainer from '../CardsContainer';

function CategoryCard({ id, name, className, ...rest }) {
  return (
    <Card
      {...rest}
      className={classNames('CategoryCard', className)}
      to={`/category/${id}`}
      height={140}
      width={300}
    >
      <span className="CategoryCard-Name">{name}</span>
    </Card>
  );
}

function Categories({ categories, ...rest }) {
  return (
    <CardsContainer {...rest}>
      {categories?.map(props => (
        <CategoryCard key={props.id} {...props} />
      ))}
    </CardsContainer>
  );
}

export default Categories;
