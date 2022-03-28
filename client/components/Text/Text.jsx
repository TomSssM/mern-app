import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Text.scss';

function Text({ size, theme, className, ...rest }) {
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
}

Text.propTypes = {
  size: PropTypes.oneOf(['xm', 'm', 'l', 'xl']),
  theme: PropTypes.oneOf(['primary', 'secondary', 'light']),
};

Text.defaultProps = {
  size: 'l',
  theme: 'primary',
};

export default Text;
