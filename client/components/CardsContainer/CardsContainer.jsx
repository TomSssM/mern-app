import React from 'react';
import classNames from 'classnames';
import './CardsContainer.scss';

// todo: move to cmponents/Card

function CardsContainer({ className, ...rest }) {
  return <div className={classNames('CardsContainer', className)} {...rest} />;
}

export default CardsContainer;
