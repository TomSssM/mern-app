import React, { Component } from 'react';

import Layout from '../../components/Layout';

// TODO: write code:
/*
  ... here comes the logic for auth check and redirect

  <>
    <Helmet>
      <title>Tasks Dashboard</title>
    </Helmet>

    <Layout>
      <Header />
      <Main>
        <Tasks />
      </Main>
      <Footer />
    </Layout>
  </>
*/

// TODO: also this:
/*
  import Spinner from '../components/Spinner';

  if (isLoading) {
    return <Spinner />;
  }
*/

class Dashboard extends Component {
  render() {
    return <Layout>Dashboard</Layout>;
  }
}

export default Dashboard;
