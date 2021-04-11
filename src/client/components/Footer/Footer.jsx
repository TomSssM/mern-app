import React from 'react';
import classnames from 'classnames';
import LangSwitcher from '../LangSwitcher';
import './Footer.scss';

const Footer = ({ className }) => (
  <footer className={classnames('Footer', className)}>
    <LangSwitcher />
    <span className="Footer-Text">все права защищены</span>
  </footer>
);

export default Footer;
