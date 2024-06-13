import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Layout from '../../components/Layout';

// TODO: write code
/*
  <Layout>
    <LoginForm />
  </Layout>
*/

class Login extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <Layout>Login</Layout>
      </>
    );
  }
}

export default Login;
