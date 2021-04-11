import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import './Logo.scss';

const Logo = ({ className }) => (
  <div className={classNames('Logo', className)}>
    <span className="Logo-Text">
      <FormattedMessage
        id="company-name"
        defaultMessage="Computers"
        description="Company name"
      />
    </span>
    <span className={classNames('Logo-Text', 'Logo-Text_style_sub')}>
      И.П. Кортасов
    </span>
  </div>
);

export default Logo;
