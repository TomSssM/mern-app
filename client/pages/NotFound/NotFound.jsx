import React, { Component } from 'react';

import ErrorInfo from '../../components/ErrorInfo';
import Layout from '../../components/Layout';

// TODO: write code:
/*
  <>
    <Helmet>
      <title>Page not found</title>
    </Helmet>

    <Layout>
      <ErrorInfo statusCode={404} />
    </Layout>
  </>
*/

class NotFound extends Component {
  render() {
    return (
      <Layout>
        <ErrorInfo statusCode={404} />
      </Layout>
    );
  }
}

export default NotFound;
