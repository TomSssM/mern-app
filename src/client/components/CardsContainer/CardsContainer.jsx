import React from 'react';
import classNames from 'classnames';
import './CardsContainer.scss';

// todo: move to cmponents/Card

const CardsContainer = ({ className, ...props }) => (
  <div className={classNames('CardsContainer', className)} {...props} />
);

export default CardsContainer;
