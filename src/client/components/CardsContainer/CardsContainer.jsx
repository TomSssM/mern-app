import React from 'react';
import classNames from 'classnames';
import './CardsContainer.scss';

const CardsContainer = ({ className, ...props }) => (
  <div className={classNames('CardsContainer', className)} {...props} />
);

export default CardsContainer;
