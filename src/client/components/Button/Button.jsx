import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import './Button.scss';
import { select } from '../../../shared/utils';

export const BUTTON_THEMES = ['clear', 'action', 'control'];

export const BUTTON_SIZES = ['xm', 'm', 'l', 'xl'];

const BaseButton = props => <button type="button" {...props} />;

const BaseLink = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

const TYPE_TO_COMPONENT_MAP = {
  button: BaseButton,
  link: BaseLink,
  router: RouterLink,
};

const Button = ({
  type = 'button',
  size: sizeRaw,
  theme: themeRaw,
  primary = false,
  className,
  ...rest
}) => {
  const Tag = TYPE_TO_COMPONENT_MAP[type] ?? BaseButton;
  const size = select(sizeRaw, BUTTON_SIZES, 'l');
  const theme = select(themeRaw, BUTTON_THEMES);

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
        className,
      )}
      {...rest}
    />
  );
};

export default Button;
