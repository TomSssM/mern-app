import React from 'react';
import classNames from 'classnames';
import './Splitter.scss';

const Splitter = ({ className, fullwidth = false }) => (
  <div
    className={classNames(
      'Splitter',
      fullwidth && 'Splitter_fullwidth',
      className,
    )}
  />
);

export default Splitter;
