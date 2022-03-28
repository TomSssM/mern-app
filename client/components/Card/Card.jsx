import React from 'react';
import classNames from 'classnames';
import './Card.scss';
import Link from '../Link';
import ProductImage from '../ProductImage';

// todo: use PropTypes and storybook

function Card({
  className,
  children,
  image,
  imageProps,
  height,
  width,
  ...rest
}) {
  // todo: rewrite to useHistory

  return (
    <Link
      className={classNames('Card', className)}
      {...rest}
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
}

export default Card;
