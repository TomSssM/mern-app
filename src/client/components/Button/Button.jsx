import React, { useEffect } from 'react';
import classNames from 'classnames';
import './Button.scss';
import Link from '../Link';
import { select } from '../../../shared/utils';
import { SIZES, DEFAULT_SIZE } from '../../../shared/constants/sizes';

export const BUTTON_THEMES = ['clear', 'action', 'control'];

export const BUTTON_TYPES = ['button', 'link', 'router'];

const BaseLink = props => <Link {...props} theme="none" />;

const TYPE_TO_COMPONENT_MAP = {
  button: 'button',
  link: BaseLink,
  router: BaseLink,
};

const Button = ({
  type: typeRaw = 'button',
  size: sizeRaw,
  theme: themeRaw,
  primary = false,
  uppercase = false,
  className,
  ...rest
}) => {
  const size = select(sizeRaw, SIZES, DEFAULT_SIZE);
  const theme = select(themeRaw, BUTTON_THEMES);
  const type = select(typeRaw, BUTTON_TYPES);
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
