import React, { Component } from 'react';

import Helmet from 'react-helmet';

import ErrorInfo from '../../components/ErrorInfo';
import Layout from '../../components/Layout';

class NotFound extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Page not found</title>
        </Helmet>

        <Layout>
          <ErrorInfo statusCode={404} />
        </Layout>
      </>
    );
  }
}

export default NotFound;
