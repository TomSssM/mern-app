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
  import Loading from '../pages/Loading';

  if (isLoading) {
    return <Loading />;
  }

  * Loading:

  import Spinner from '../components/Spinner';

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
*/

class Dashboard extends Component {
  render() {
    return <Layout>Dashboard</Layout>;
  }
}

export default Dashboard;
