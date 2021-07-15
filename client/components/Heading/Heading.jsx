import React from 'react';
import classNames from 'classnames';
import './Heading.scss';

const Heading = ({ children, className, ...props }) => (
  <h1 className={classNames('Heading', className)} {...props}>
    {children}
  </h1>
);

export default Heading;
