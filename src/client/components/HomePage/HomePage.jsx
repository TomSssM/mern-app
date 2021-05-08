import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import CategoryCard from '../CategoryCard';
import Page from '../Page';
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
      <div className="HomePage-Categories">
        {categories.map(({ id, name, image }) => (
          <CategoryCard key={id} id={id} name={name} image={image} />
        ))}
      </div>
    </Page>
  );
};

export default HomePage;
