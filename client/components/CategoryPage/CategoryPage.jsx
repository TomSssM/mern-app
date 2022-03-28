import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Page from '../Page';
import Heading from '../Heading';
import HomeButton from '../HomeButton';
import Categories from '../Categories';
import Products from '../Products';
import './CategoryPage.scss';

function CategoryPage({ name, products, categories }) {
  const categoriesEmpty = !categories?.length;
  const productsEmpty = !products?.length;
  const isEmpty = categoriesEmpty && productsEmpty;

  return (
    <Page
      className={classNames('CategoryPage', isEmpty && 'CategoryPage_empty')}
    >
      <Helmet>
        <title>{name}</title>
      </Helmet>
      {!categoriesEmpty && (
        <Categories
          className="CategoryPage-Categories"
          categories={categories}
        />
      )}
      {!productsEmpty && <Products products={products} />}
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
          <HomeButton className="CategoryPage-HomeButton" />
        </>
      )}
    </Page>
  );
}

export default CategoryPage;
