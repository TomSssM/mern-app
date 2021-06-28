import React from 'react';
import classNames from 'classnames';
import './ProductImage.scss';
import Shade from '../Shade';
import { select } from '../../../shared/utils';

export const IMAGE_SIZES = ['fit', 'full'];

// todo: use PropTypes and storybook

const ProductImage = ({
  src,
  position: { x: posX, y: posY } = {},
  size: sizeRaw = 'fit',
  className,
  ...rest
}) => {
  const size = select(sizeRaw, IMAGE_SIZES);
  return (
    <Shade className={classNames('ProductImage', className)} {...rest}>
      <div
        className={classNames(
          'ProductImage-Image',
          `ProductImage-Image_size_${size}`,
        )}
        style={{
          backgroundImage: `url(${src})`,
          backgroundPositionX: posX,
          backgroundPositionY: posY,
        }}
      />
    </Shade>
  );
};

export default ProductImage;
