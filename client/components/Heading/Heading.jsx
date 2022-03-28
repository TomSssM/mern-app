import React from 'react';
import classNames from 'classnames';
import './Heading.scss';

function Heading({ children, className, ...rest }) {
  return (
    <h1 className={classNames('Heading', className)} {...rest}>
      {children}
    </h1>
  );
}

export default Heading;
