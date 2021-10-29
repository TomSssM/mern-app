import React from 'react';
import classNames from 'classnames';
import './Heading.scss';

const Heading = ({ children, className, ...rest }) => (
  <h1 className={classNames('Heading', className)} {...rest}>
    {children}
  </h1>
);

export default Heading;
