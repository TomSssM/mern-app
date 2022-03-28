import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../Button';

function HomeButton(props) {
  return (
    <Button size="xl" theme="control" type="router" to="/" {...props}>
      <FormattedMessage id="go-to-main" defaultMessage="Go to main" />
    </Button>
  );
}

export default HomeButton;
