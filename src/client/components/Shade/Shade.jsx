import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import './Shade.scss';

// todo: use PropTypes and storybook

const Shade = ({ className, children, color, size, ...rest }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      if (color) {
        ref.current.style.setProperty('--shade-color', color);
      }

      if (size) {
        ref.current.style.setProperty('--shade-size', size);
      }
    }
  }, [size, color]);

  return (
    <div className={classNames('Shade', className)} {...rest} ref={ref}>
      {children}
      <div className="Shade-Shadow" />
    </div>
  );
};

export default Shade;
