import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Layout from '../../components/Layout';

// TODO: write code
/*
  <Layout>
    <RegisterForm />
  </Layout>
*/

class Register extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Register</title>
        </Helmet>

        <Layout>Register</Layout>
      </>
    );
  }
}

export default Register;
