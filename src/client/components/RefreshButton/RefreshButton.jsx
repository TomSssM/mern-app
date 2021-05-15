import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Button from '../Button';
import './RefreshButton.scss';

const RefreshButton = ({ className, ...props }) => {
  const onClick = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Button
      {...props}
      className={classNames('RefreshButton', className)}
      onClick={onClick}
      size="xl"
      theme="control"
    >
      <FormattedMessage id="refresh" defaultMessage="Reload" />
    </Button>
  );
};

export default RefreshButton;
