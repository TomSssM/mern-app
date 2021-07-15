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
  ...rest
}) => {
  const size = select(sizeRaw, IMAGE_SIZES);
  return (
    <Shade {...rest}>
      <div
        className={classNames('ProductImage', `ProductImage_size_${size}`)}
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
