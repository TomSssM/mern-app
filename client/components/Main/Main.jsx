import React from 'react';
import classNames from 'classnames';
import './Main.scss';

function Main({ children, className }) {
  return <main className={classNames('Main', className)}>{children}</main>;
}

export default Main;
