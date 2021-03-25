import React from 'react';
import './Footer.css';
import { clsx } from '../../../shared/utils';

const FooterText = ({ children }) => (
  <span className="footer__text">{children}</span>
);

const Footer = ({ className }) => (
  <footer className={clsx('footer', className)}>
    <FooterText>все права защищены</FooterText>
  </footer>
);

export default Footer;
