import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import Page from '../Page';
import Categories from '../Categories';
import './HomePage.scss';

const HomePage = ({ categories }) => {
  const intl = useIntl();
  return (
    <Page className="HomePage">
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'company-name',
            defaultMessage: 'Chip',
          })}
        </title>
      </Helmet>
      <Categories className="HomePage-Categories" categories={categories} />
    </Page>
  );
};

export default HomePage;
