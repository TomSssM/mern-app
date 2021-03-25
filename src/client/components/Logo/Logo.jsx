import React from 'react';
import './Logo.css';
import { clsx } from '../../../shared/utils';

const Logo = ({ className }) => (
  <header className={clsx('logo', className)}>
    <span className="logo__text">Компьютеры и Комплектующие</span>
    <span className="logo__text logo__text_style_sub">И.П. Кортасов</span>
  </header>
);

export default Logo;
