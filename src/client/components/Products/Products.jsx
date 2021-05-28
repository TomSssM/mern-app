import React from 'react';
import classNames from 'classnames';
import './Products.scss';
import CardsContainer from '../CardsContainer';
import Card from '../Card';
import { PHONE_NUMBER } from '../../../shared/constants/owner';

export const ProductCard = ({
  name: productName,
  params = [],
  className,
  ...props
}) => (
  <Card
    className={classNames('ProductCard', className)}
    {...props}
    type="link"
    to={`tel:${PHONE_NUMBER}`}
    height={400}
    width={300}
  >
    {productName}
    <br />
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
