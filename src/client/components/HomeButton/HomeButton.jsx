import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Button from '../Button';
import './HomeButton.scss';

const HomeButton = ({ className, ...props }) => (
  <Button
    className={classNames('HomeButton', className)}
    size="xl"
    theme="control"
    type="router"
    to="/"
    {...props}
  >
    <FormattedMessage id="go-to-main" defaultMessage="Go to main" />
  </Button>
);

export default HomeButton;
