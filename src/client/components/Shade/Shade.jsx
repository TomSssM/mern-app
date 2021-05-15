import React from 'react';
import classNames from 'classnames';
import './Shade.scss';

const Shade = ({ className, children, ...rest }) => (
  <div {...rest} className={classNames('Shade', className)}>
    {children}
    <div className="Shade-Shadow" />
  </div>
);

export default Shade;
