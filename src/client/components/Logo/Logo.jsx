import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import './Logo.scss';

const Logo = () => (
  <div className="Logo">
    <span className="Logo-Text">
      <FormattedMessage
        id="company-name"
        defaultMessage="Chip"
        description="Company name"
      />
    </span>
    <span className={classNames('Logo-Text', 'Logo-Text_style_sub')}>
      <FormattedMessage
        id="company-owner"
        defaultMessage="Vitali Kartasau"
        description="Company owner"
      />
    </span>
  </div>
);

export default Logo;
