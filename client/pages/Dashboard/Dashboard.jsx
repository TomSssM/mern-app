import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Main from '../../components/Main';

// TODO: in render comes the logic for auth check, loading and redirect
// TODO: Dashboard -> <Tasks />
// TODO: write code:
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
    return (
      <>
        <Helmet>
          <title>Tasks Dashboard</title>
        </Helmet>

        <Layout>
          <Header />
          <Main>Dashboard</Main>
          <Footer />
        </Layout>
      </>
    );
  }
}

export default Dashboard;
