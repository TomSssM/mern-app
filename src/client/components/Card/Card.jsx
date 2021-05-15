import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Card.scss';

const Card = ({ className, ...props }) => (
  <Link className={classNames('Card', className)} {...props} />
);

export default Card;
