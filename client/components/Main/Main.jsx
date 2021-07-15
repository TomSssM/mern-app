import React from 'react';
import classNames from 'classnames';
import './Main.scss';

const Main = ({ children, className }) => (
  <main className={classNames('Main', className)}>{children}</main>
);

export default Main;
