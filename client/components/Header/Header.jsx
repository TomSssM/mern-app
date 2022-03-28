import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import Logo from '../Logo';
import Button from '../Button';
import Link from '../Link';
import Text from '../Text';
import {
  PHONE_NUMBER_RAW,
  PHONE_NUMBER,
} from '../../../shared/constants/owner';
import { formatPhone } from '../../../shared/utils';

function Header() {
  return (
    <header className="Header">
      <div className="Header-Top">
        <Button
          uppercase
          className="Header-PhoneButton"
          type="link"
          to={`tel:${PHONE_NUMBER}`}
          theme="action"
        >
          <Text size="m">
            <FormattedMessage id="contact" defaultMessage="Contact" />
          </Text>
          <FontAwesomeIcon className="Header-PhoneIcon" icon={faPhoneAlt} />
          <span className="Header-Phone">{formatPhone(PHONE_NUMBER_RAW)}</span>
        </Button>
        <Button type="router" to="/login">
          <FontAwesomeIcon className="Header-SignInIcon" icon={faSignInAlt} />
          <FormattedMessage id="sign-in" defaultMessage="Sign In" />
        </Button>
      </div>
      <Link nofocus to="/" theme="none">
        <Logo />
      </Link>
    </header>
  );
}

export default Header;
