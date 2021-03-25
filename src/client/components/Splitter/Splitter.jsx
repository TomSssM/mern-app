import React from 'react';
import './Splitter.css';
import { clsx } from '../../../shared/utils';

export const Splitter = ({ className }) => (
  <div className={clsx('splitter', className)} />
);
