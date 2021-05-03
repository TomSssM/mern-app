import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Header.scss';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => (
  <header className="Header">
    <div className="Header-Top">
      <Button theme="action" size="m">
        <span className="Header-ButtonText">
          <FormattedMessage id="contact" defaultMessage="Contact" />
        </span>
        <span className="Header-Phone">+375 (29) 662-16-19</span>
      </Button>
      <Button>
        <FormattedMessage id="sign-in" defaultMessage="Sign In" />
      </Button>
    </div>
    <Logo />
  </header>
);

export default Header;
