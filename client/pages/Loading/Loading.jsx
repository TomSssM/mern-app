import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner';

class Loading extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>loading...</title>
        </Helmet>

        <Layout>
          <Spinner />
        </Layout>
      </>
    );
  }
}

export default Loading;
