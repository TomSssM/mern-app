import React from 'react';
import classNames from 'classnames';
import './Products.scss';
import CardsContainer from '../CardsContainer';
import Card from '../Card';
import { PHONE_NUMBER } from '../../../shared/constants/owner';

function ProductCard({ name: productName, params = [], className, ...rest }) {
  return (
    <Card
      className={classNames('ProductCard', className)}
      {...rest}
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
}

function Products({ products, ...rest }) {
  return (
    <CardsContainer {...rest}>
      {products?.map(props => (
        <ProductCard key={props.id} {...props} />
      ))}
    </CardsContainer>
  );
}

export default Products;
