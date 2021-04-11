import React from 'react';
import classNames from 'classnames';
import './Header.scss';

const Header = ({ children, className }) => (
  <header className={classNames('Header', className)}>
    {children}
  </header>
);

export default Header;
