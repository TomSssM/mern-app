import React from 'react';
import classNames from 'classnames';
import './Products.scss';
import CardsContainer from '../CardsContainer';
import Card from '../Card';
import { PHONE_NUMBER } from '../../../shared/const/owner';

export const ProductCard = ({
  name: productName,
  image,
  params = [],
  className,
}) => (
  <Card
    type="link"
    className={classNames('ProductCard', className)}
    to={`tel:${PHONE_NUMBER}`}
  >
    {productName}
    <br />
    <img src={image} alt={productName} width="200px" />
    {params.map(({ name: paramName, value }) => (
      <div key={paramName}>
        <span>
          <b>{paramName}:</b> {value}
        </span>
      </div>
    ))}
  </Card>
);

const Products = ({ products, ...props }) => (
  <CardsContainer {...props}>
    {products?.map(({ id, ...rest }) => (
      <ProductCard key={id} id={id} {...rest} />
    ))}
  </CardsContainer>
);

export default Products;
