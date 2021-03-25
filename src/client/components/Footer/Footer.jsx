import React from 'react';
import './Footer.css';
import { clsx } from '../../../shared/utils';

const FooterText = ({ children }) => (
  <span className="footer__text">{children}</span>
);

export const Footer = ({ className }) => (
  <footer className={clsx('footer', className)}>
    <FooterText>hi</FooterText>
    <FooterText>there</FooterText>
  </footer>
);
