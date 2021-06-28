import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Shade.scss';

const Shade = ({
  className,
  children,
  color,
  size,
  rotate,
  direction,
  opacity,
  ...rest
}) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--shade-size', `${size}%`);
      ref.current.style.setProperty(
        '--shade-opacity',
        Math.min(opacity / 100, 1),
      );

      if (color) {
        ref.current.style.setProperty('--shade-color', color);
      }

      if (rotate || direction) {
        ref.current.style.setProperty(
          '--shade-direction',
          rotate ? `${rotate}deg` : `to ${direction}`,
        );
      }
    }
  }, [size, color, rotate, direction, opacity]);

  return (
    <div className={classNames('Shade', className)} {...rest} ref={ref}>
      {children}
      <div className="Shade-Shadow" />
    </div>
  );
};

Shade.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.number,
  size: PropTypes.number,
  rotate: PropTypes.number,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

Shade.defaultProps = {
  color: null,
  opacity: 100,
  size: 50,
  rotate: null,
  direction: 'top',
};

export default Shade;
