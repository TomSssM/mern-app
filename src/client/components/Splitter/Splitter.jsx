import React from 'react';
import './Splitter.css';
import { clsx } from '../../../shared/utils';

const Splitter = ({ className }) => (
  <div className={clsx('splitter', className)} />
);

export default Splitter;
