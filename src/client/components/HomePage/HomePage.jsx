import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import CategoryCard from '../CategoryCard';
import Page from '../Page';
import CardsContainer from '../CardsContainer';
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
      <CardsContainer className="HomePage-Categories">
        {categories.map(({ id, ...rest }) => (
          <CategoryCard key={id} id={id} {...rest} />
        ))}
      </CardsContainer>
    </Page>
  );
};

export default HomePage;
