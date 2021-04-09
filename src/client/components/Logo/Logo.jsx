import React from 'react';
import classNames from 'classnames';
import './Logo.scss';

const Logo = ({ className }) => (
  <div className={classNames('Logo', className)}>
    <span className="Logo-Text">Компьютеры и Комплектующие</span>
    <span className={classNames('Logo-Text', 'Logo-Text_style_sub')}>
      И.П. Кортасов
    </span>
  </div>
);

export default Logo;
