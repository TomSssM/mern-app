import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import Logo from '../Logo';
import Button from '../Button';
import { PHONE_NUMBER_RAW, PHONE_NUMBER } from '../../../shared/const/owner';
import { formatPhone } from '../../../shared/utils';

const Header = () => (
  <header className="Header">
    <div className="Header-Top">
      <Button type="link" to={`tel:${PHONE_NUMBER}`} theme="action">
        <span className="Header-PhoneButtonText">
          <FormattedMessage id="contact" defaultMessage="Contact" />
        </span>
        <FontAwesomeIcon className="Header-PhoneIcon" icon={faPhoneAlt} />
        <span className="Header-Phone">{formatPhone(PHONE_NUMBER_RAW)}</span>
      </Button>
      <Button type="router" to="/login">
        <FontAwesomeIcon className="Header-SignInIcon" icon={faSignInAlt} />
        <FormattedMessage id="sign-in" defaultMessage="Sign In" />
      </Button>
    </div>
    <Logo />
  </header>
);

export default Header;
