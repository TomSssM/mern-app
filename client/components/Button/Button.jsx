import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';
import Link from '../Link';

function BaseLink(props) {
  return <Link {...props} theme="none" />;
}

function Button({ type, size, theme, primary, uppercase, className, ...rest }) {
  let Tag = 'button';

  if (type === 'link' || type === 'router') {
    Tag = BaseLink;
  }

  return (
    <Tag
      className={classNames(
        'Button',
        `Button_size_${size}`,
        `Button_theme_${theme}`,
        `Button_type_${type}`,
        primary && 'Button_primary',
        uppercase && 'Button_uppercase',
        className,
      )}
      role="button"
      type={type}
      {...rest}
    />
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'link', 'router']),
  size: PropTypes.oneOf(['xm', 'm', 'l', 'xl']),
  theme: PropTypes.oneOf(['clear', 'action', 'control']),
  primary: PropTypes.bool,
  uppercase: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  size: 'l',
  theme: 'clear',
  primary: false,
  uppercase: false,
};

export default Button;
