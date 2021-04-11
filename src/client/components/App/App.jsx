import React from 'react';
import Layout from '../Layout';
import Products from '../Products';
import IntlProvider from '../IntlProvider';

const App = () => (
  <IntlProvider>
    <Layout>
      <Products />
    </Layout>
  </IntlProvider>
);

export default App;
