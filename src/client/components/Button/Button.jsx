import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Button.scss';
import { select } from '../../../shared/utils';

export const BUTTON_THEMES = ['clear', 'action', 'control'];

export const BUTTON_SIZES = ['xm', 'm', 'l', 'xl'];

const BaseButton = props => <button type="button" {...props} />;

const Button = ({
  type = 'button',
  size: sizeRaw,
  theme: themeRaw,
  primary = false,
  ...rest
}) => {
  const Tag = type === 'link' ? Link : BaseButton;
  const size = select(sizeRaw, BUTTON_SIZES, 'l');
  const theme = select(themeRaw, BUTTON_THEMES);

  return (
    <Tag
      className={classNames(
        'Button',
        `Button_size_${size}`,
        `Button_theme_${theme}`,
        primary && 'Button_primary',
      )}
      {...rest}
    />
  );
};

export default Button;
