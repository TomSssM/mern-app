import React from 'react';
import { FormattedMessage } from 'react-intl';
import LangSwitcher from '../LangSwitcher';
import './Footer.scss';

const Footer = () => (
  <footer className="Footer">
    <LangSwitcher />
    <span className="Footer-Copyright">
      &copy;{' '}
      <FormattedMessage
        id="copyright"
        defaultMessage="All rights reserved"
        description="Footer text"
      />
    </span>
  </footer>
);

export default Footer;
