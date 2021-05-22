import React from 'react';
import classNames from 'classnames';
import './Text.scss';
import { select } from '../../../shared/utils';
import { SIZES, DEFAULT_SIZE } from '../../../shared/const/sizes';

export const TEXT_THEMES = ['primary', 'secondary', 'light'];

const Text = ({
  size: sizeRaw = DEFAULT_SIZE,
  theme: themeRaw = 'primary',
  className,
  ...rest
}) => {
  const size = select(sizeRaw, SIZES);
  const theme = select(themeRaw, TEXT_THEMES);

  return (
    <span
      className={classNames(
        'Text',
        `Text_size_${size}`,
        `Text_theme_${theme}`,
        className,
      )}
      {...rest}
    />
  );
};

export default Text;
