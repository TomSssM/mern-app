import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import PageLayout from '../../components/Page';
import Page from '../../components/Home';

// todo: loadable
const Home = () => {
  const intl = useIntl();

  return (
    <PageLayout>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'company-name',
            defaultMessage: 'Chip',
          })}
        </title>
      </Helmet>
      <Page />
    </PageLayout>
  );
};

export default Home;
