import React from 'react';
import './index.css';
import { clsx } from '../../../shared/utils';

// eslint-disable-next-line import/prefer-default-export
export const padded = Component => ({ className, ...props }) => (
  <Component className={clsx('padded', className)} {...props} />
);
