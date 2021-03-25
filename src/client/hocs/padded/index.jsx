import React from 'react';
import './index.css';
import { clsx } from '../../../shared/utils';

export const padded = Component => ({ className, ...props }) => (
  <Component className={clsx('padded', className)} {...props} />
);
