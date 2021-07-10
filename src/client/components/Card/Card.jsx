import React from 'react';
import classNames from 'classnames';
import './Card.scss';
import Link from '../Link';
import ProductImage from '../ProductImage';

// todo: use PropTypes and storybook

const Card = ({
  className,
  children,
  image,
  imageProps,
  height,
  width,
  ...props
}) => (
  // todo: rewrite to useHistory
  <Link
    className={classNames('Card', className)}
    {...props}
    style={{
      height: `${height}px`,
      maxWidth: `${width}px`,
    }}
    theme="none"
  >
    <ProductImage className="Card-Image" src={image} {...imageProps} />
    {children}
  </Link>
);

export default Card;
