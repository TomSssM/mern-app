import React from 'react';
import classNames from 'classnames';
import './Card.scss';
import Link from '../Link';

const Card = ({ className, ...props }) => (
  <Link className={classNames('Card', className)} {...props} theme="none" />
);

export default Card;
