import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';
import Link from '../Link';

const BaseLink = props => <Link {...props} theme="none" />;

const TYPE_TO_COMPONENT_MAP = {
  button: 'button',
  link: BaseLink,
  router: BaseLink,
};

// todo: use PropTypes everywhere instead of select

const Button = ({
  type,
  size,
  theme,
  primary,
  uppercase,
  className,
  ...rest
}) => {
  const Tag = TYPE_TO_COMPONENT_MAP[type];

  useEffect(() => {
    if (!Object.keys(TYPE_TO_COMPONENT_MAP).includes(type)) {
      console.error(`Unknown type passed to Button component: "${type}"`);
    }
  }, [type]);

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
};

export default Button;

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
