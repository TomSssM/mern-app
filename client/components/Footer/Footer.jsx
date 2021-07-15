import React from 'react';
import { FormattedMessage } from 'react-intl';
import LangSwitcher from '../LangSwitcher';
import './Footer.scss';
import Text from '../Text';

const Footer = () => (
  <footer className="Footer">
    <LangSwitcher />
    <Text size="xm" className="Footer-Copyright" theme="secondary">
      &copy;{' '}
      <FormattedMessage
        id="copyright"
        defaultMessage="All rights reserved"
        description="Footer text"
      />
    </Text>
  </footer>
);

export default Footer;
