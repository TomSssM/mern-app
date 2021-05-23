import React from 'react';
import classNames from 'classnames';
import './Card.scss';
import Link from '../Link';
import ProductImage from '../ProductImage';

const Card = ({
  className,
  children,
  image,
  imageProps,
  height,
  width,
  ...props
}) => (
  <Link
    className={classNames('Card', className)}
    {...props}
    style={{
      height: `${height}px`,
      maxWidth: `${width}px`,
    }}
    theme="none"
  >
    <ProductImage src={image} {...imageProps} />
    {children}
  </Link>
);

export default Card;
