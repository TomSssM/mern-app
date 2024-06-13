import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Main from '../../components/Main';

// TODO: in render comes the logic for auth check, loading and redirect
// TODO: if (isLoading) return <Loading /> from '../Loading'
// TODO: Dashboard -> <Tasks />

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
