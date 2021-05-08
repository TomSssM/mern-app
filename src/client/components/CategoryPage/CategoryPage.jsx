import React from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Page';

const CategoryPage = ({ name, products }) => (
  <Page>
    <Helmet>
      <title>{name}</title>
    </Helmet>
    {products?.map(product => (
      <span>{product}</span>
    ))}
    {!products.length && <span>no prod</span>}
  </Page>
);

export default CategoryPage;
