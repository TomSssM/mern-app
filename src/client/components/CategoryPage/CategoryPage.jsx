import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import './CategoryPage.scss';
import Page from '../Page';
import Heading from '../Heading';
import HomeButton from '../HomeButton';
import Categories from '../Categories';
import Products from '../Products';

const CategoryPage = ({ name, products, categories }) => {
  const categoriesEmpty = !categories?.length;
  const productsEmpty = !products?.length;
  const isEmpty = categoriesEmpty && productsEmpty;

  return (
    <Page className="CategoryPage">
      <Helmet>
        <title>{name}</title>
      </Helmet>
      {!productsEmpty && <Products products={products} />}
      {!categoriesEmpty && <Categories categories={categories} />}
      {isEmpty && (
        <>
          <Heading className="CategoryPage-Heading">
            <FormattedMessage
              id="category-empty"
              defaultMessage="The category is empty"
              values={{
                name,
              }}
            />
          </Heading>
          <HomeButton className="HomeButton" />
        </>
      )}
    </Page>
  );
};

export default CategoryPage;
