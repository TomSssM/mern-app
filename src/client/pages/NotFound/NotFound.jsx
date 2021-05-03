import React from 'react';
import { Helmet } from 'react-helmet';
import Main from '../../components/Main';

// todo: translate
const NotFound = () => (
  <Main>
    <Helmet>
      <title>Oops!</title>
    </Helmet>
    <h1>Not Found!</h1>
  </Main>
);

export default NotFound;
