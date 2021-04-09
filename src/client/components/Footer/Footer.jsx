import React from 'react';
import classnames from 'classnames';
import './Footer.scss';

const Footer = ({ className }) => (
  <footer className={classnames('Footer', className)}>
    <span className="Footer-Text">все права защищены</span>
  </footer>
);

export default Footer;
