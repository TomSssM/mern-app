import React from 'react';
import classNames from 'classnames';
import './CardsContainer.scss';

// todo: move to cmponents/Card

const CardsContainer = ({ className, ...rest }) => (
  <div className={classNames('CardsContainer', className)} {...rest} />
);

export default CardsContainer;
