import React from 'react';
import './Logo.css';
import { clsx } from '../../../shared/utils';

export const Logo = ({ className }) => (
  <header className={clsx('logo', className)}>logo</header>
);
