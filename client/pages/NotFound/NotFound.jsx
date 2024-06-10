import React, { Component } from 'react';

import ErrorInfo from '../../components/ErrorInfo';
import Layout from '../../components/Layout';

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
